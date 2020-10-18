import { Injectable } from '@angular/core';
import { Action } from '../model/action';
import { Robot } from '../model/robot';
import { TableArea } from '../model/table-area';
import * as _ from "lodash";
import { PlaceAction } from '../model/place-action';
import { ActionType } from '../action-type.enum';
@Injectable({
  providedIn: 'root'
})
export class ActionService {

  public commands: Array<Action>;
    public reports: Array<string>;

    private robotPlaced: boolean;

    constructor(public playArea: TableArea, public robot: Robot) {
        this.commands = new Array<Action>();
        this.reports = new Array<string>();
        this.robotPlaced = false;
    }

    executecommands(): boolean {
        if (_.isEmpty(this.commands)) {
            return false;
        }

        //get a reference to the service for use in the foreach and remove commands
        let self = this;

        //if the robot hasn't been placed we need to make sure the first command is a place command
        if (!this.robotPlaced) {

            let firstValidPlacecommandIndex: number = 0;

            let placecommands = _.filter(this.commands, function (pc) { return pc.commandType == ActionType.Place });

            if (_.isEmpty(placecommands)) {
                return false;
            }

            for (let placecommand of placecommands) {
                let pc = placecommand as PlaceAction;
                if (this.robot.place(pc.location)) {
                    this.robotPlaced = true;
                    firstValidPlacecommandIndex = this.commands.indexOf(placecommand, 0);
                    break;
                }
            }

            if (!this.robotPlaced) {
                return false;
            }

            //remove all the commands upto and including the first valid place command
             _.remove(this.commands, command => self.commands.indexOf(command) <= firstValidPlacecommandIndex);
        }

        if (this.commands) {
            this.commands.forEach(function (command) {
                self.executecommand(command);
            });
        }

        //clear the commands now they have been executed 
        this.commands = new Array<Action>();

        return true;
    }

    private executecommand(command: Action): void {
        switch (command.commandType) {
            case ActionType.Place:
                let placecommand = command as PlaceAction;
                this.robot.place(placecommand.location);
                break;
            case ActionType.Left:
                this.robot.turnFaceLeft();
                break;
            case ActionType.Right:
                this.robot.turnFaceRight();
                break;
            case ActionType.Move:
                this.robot.move();
                break;
            case ActionType.Report:
                this.reports.push(this.robot.report());
                break;
        }
    }
}
