import { Component } from '@angular/core';
import { ActionType } from '../config/action-type.enum';
import { Action } from '../config/model/action';
import { ActionService } from '../config/service/action.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public actionTypes = ActionType;
  constructor(public actionService: ActionService) { }
  actionClicked($event: Action): void {
    this.actionService.actions.push($event);
  }

  executeActionClick(): void {
    this.actionService.executeactions();
  }
}
