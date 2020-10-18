import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-place-robot-form-modal',
  templateUrl: './place-robot-form-modal.component.html',
  styleUrls: ['./place-robot-form-modal.component.scss'],
})
export class PlaceRobotFormModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }
  xPos: any = null;
  yPos: any = null;
  direction: any = null;
  onchangeX($event) {
    // console.log($event.target.value);
    this.xPos = $event.target.value;
  }
  onchangeY($event) {
    // console.log($event.target.value);
    this.yPos = $event.target.value;
  }
  ondirectionChange($event) {
    // console.log($event.target.value);
    this.direction = $event.target.value;
  }

  ngOnInit() { }
  placeRobot() {
    if (this.xPos && this.yPos && this.direction) {
      this.modalController.dismiss({
        'xPos': Number.parseInt(this.xPos),
        'yPos': Number.parseInt(this.yPos),
        'direction': Number.parseInt(this.direction)
      });
    }

  }
}
