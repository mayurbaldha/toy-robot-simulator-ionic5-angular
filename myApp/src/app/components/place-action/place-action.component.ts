import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Direction } from 'src/app/config/direction.enum';
import * as _ from "lodash";
import { PlaceAction } from 'src/app/config/model/place-action';

import { PlaceRobotFormModalComponent } from '../place-robot-form-modal/place-robot-form-modal.component';
import { Location } from 'src/app/config/model/location';
@Component({
  selector: 'app-place-action',
  templateUrl: './place-action.component.html',
  styleUrls: ['./place-action.component.scss'],
})
export class PlaceActionComponent implements OnInit {

  public directions = Direction;
    private directionsValues = _.filter(this.directions, function (val, key, obj) {
        return typeof val === 'number';
    });

    @Output() commandClick = new EventEmitter<PlaceAction>();

    private xLocation: number;
    private yLocation: number;
    private direction: Direction;
    public modal: any;
    constructor(public modalController: ModalController,) {

    }

  ngOnInit() {}
  async presentplaceRobotModal() {
    this.reset();
    this.modal = await this.modalController.create({
        component: PlaceRobotFormModalComponent,
    });
    await this.modal.present();
    const { data } = await this.modal.onWillDismiss();
    console.log(data);
    this.xLocation = data.xPos;
    this.yLocation = data.yPos;
    this.direction = data.direction;
    this.commandClick.emit(new PlaceAction(new Location(this.xLocation, this.yLocation, this.direction)));
}

reset(): void {
    this.xLocation = null;
    this.yLocation = null;
    this.direction = null;
}

}
