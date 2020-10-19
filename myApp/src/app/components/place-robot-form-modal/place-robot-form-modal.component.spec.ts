import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlertController, IonicModule, ModalController } from '@ionic/angular';

import { PlaceRobotFormModalComponent } from './place-robot-form-modal.component';

describe('PlaceRobotFormModalComponent', () => {
  let component: PlaceRobotFormModalComponent;
  let fixture: ComponentFixture<PlaceRobotFormModalComponent>;
  // let debugElement: DebugElement;
  // let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceRobotFormModalComponent ],
      imports: [IonicModule.forRoot(),AlertController,ModalController]
    }).compileComponents().then(()=>{
      fixture = TestBed.createComponent(PlaceRobotFormModalComponent);
      component = fixture.componentInstance;
      // debugElement = fixture.debugElement.query(By.css())
      // element = debugElement.nativeElement;
      fixture.detectChanges();
    });

    
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
