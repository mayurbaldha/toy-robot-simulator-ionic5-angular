import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { PlaceActionComponent } from '../components/place-action/place-action.component';
import { StepTrackActionComponent } from '../components/step-track-action/step-track-action.component';
import { ActionType } from '../config/action-type.enum';
import { Action } from '../config/model/action';
import { ActionService } from '../config/service/action.service';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage , PlaceActionComponent,StepTrackActionComponent],
      imports: [IonicModule.forRoot(),ActionService,Action,ActionType]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should find the ion-title with fixture.debugElement.query(By.css)', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const ele = debugElement.query(By.css('ion-title'));
    const htmlele: HTMLElement = ele.nativeElement;
    expect(htmlele.textContent).toEqual('Toy-Robot Simulator');
  });
});
