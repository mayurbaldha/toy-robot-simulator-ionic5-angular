import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionType } from 'src/app/config/action-type.enum';
import { Action } from 'src/app/config/model/action';

@Component({
  selector: 'app-step-track-action',
  templateUrl: './step-track-action.component.html',
  styleUrls: ['./step-track-action.component.scss'],
})
export class StepTrackActionComponent implements OnInit {
  private _actionType: ActionType;

  get actionType(): ActionType {
      return this._actionType;
  }

  @Input()
  set actionType(actionType: ActionType) {
      this._actionType = actionType;
      this.actionName = ActionType[this._actionType];
      // console.log(this._actionType,this.actionName);
  }

  @Output() actionClick = new EventEmitter<Action>();

  public actionName: string;

  constructor() { }

  ngOnInit() {}

  public btnClick() {
    this.actionClick.emit(new Action(this.actionType));
}
}
