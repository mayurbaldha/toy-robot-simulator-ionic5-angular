import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionType } from 'src/app/config/action-type.enum';
import { Action } from 'src/app/config/model/action';

@Component({
  selector: 'app-step-track-action',
  templateUrl: './step-track-action.component.html',
  styleUrls: ['./step-track-action.component.scss'],
})
export class StepTrackActionComponent implements OnInit {
  private _commandType: ActionType;

  get commandType(): ActionType {
      return this._commandType;
  }

  @Input()
  set commandType(commandType: ActionType) {
      this._commandType = commandType;
      this.commandName = ActionType[this._commandType];
      // console.log(this._commandType,this.commandName);
  }

  @Output() commandClick = new EventEmitter<Action>();

  public commandName: string;

  constructor() { }

  ngOnInit() {}

  public btnClick() {
    this.commandClick.emit(new Action(this.commandType));
}
}
