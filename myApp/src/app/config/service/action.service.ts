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

  public actions: Array<Action>;
    public reports: Array<string>;

    private robotPlaced: boolean;

    constructor(public playArea: TableArea, public robot: Robot) {
        this.actions = new Array<Action>();
        this.reports = new Array<string>();
        this.robotPlaced = false;
    }

    executeactions(): boolean {
        if (_.isEmpty(this.actions)) {
            return false;
        }

        //get a reference to the service for use in the foreach and remove actions
        let self = this;

        //if the robot hasn't been placed we need to make sure the first action is a place action
        if (!this.robotPlaced) {

            let firstValidPlaceactionIndex: number = 0;

            let placeactions = _.filter(this.actions, function (pc) { return pc.actionType == ActionType.Place });

            if (_.isEmpty(placeactions)) {
                return false;
            }

            for (let placeaction of placeactions) {
                let pc = placeaction as PlaceAction;
                if (this.robot.place(pc.location)) {
                    this.robotPlaced = true;
                    firstValidPlaceactionIndex = this.actions.indexOf(placeaction, 0);
                    break;
                }
            }

            if (!this.robotPlaced) {
                return false;
            }

            //remove all the actions upto and including the first valid place action
             _.remove(this.actions, action => self.actions.indexOf(action) <= firstValidPlaceactionIndex);
        }

        if (this.actions) {
            this.actions.forEach(function (action) {
                self.executeaction(action);
            });
        }

        //clear the actions now they have been executed 
        this.actions = new Array<Action>();

        return true;
    }
// finding functions for actions 
    private executeaction(action: Action): void {
        switch (action.actionType) {
            case ActionType.Place:
                let placeaction = action as PlaceAction;
                this.robot.place(placeaction.location);
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
