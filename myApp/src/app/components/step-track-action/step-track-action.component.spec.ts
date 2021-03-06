import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ActionType } from 'src/app/config/action-type.enum';
import { Action } from 'src/app/config/model/action';

import { StepTrackActionComponent } from './step-track-action.component';

describe('StepTrackActionComponent', () => {
  let component: StepTrackActionComponent;
  let fixture: ComponentFixture<StepTrackActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTrackActionComponent ],
      imports: [IonicModule.forRoot(),ActionType,Action]
    }).compileComponents();

    fixture = TestBed.createComponent(StepTrackActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
