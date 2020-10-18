import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PlaceActionComponent } from '../components/place-action/place-action.component';
import { StepTrackActionComponent } from '../components/step-track-action/step-track-action.component';
import { ActionService } from '../config/service/action.service';
import { ActionServiceFactory } from '../config/service/action-service-factory';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,PlaceActionComponent,StepTrackActionComponent,],
  providers:[{provide:ActionService,useFactory:ActionServiceFactory}]
})
export class HomePageModule {}
