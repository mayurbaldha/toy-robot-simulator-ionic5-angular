import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Direction } from 'src/app/config/direction.enum';
import { PlaceAction } from 'src/app/config/model/place-action';

import { PlaceActionComponent } from './place-action.component';

describe('PlaceActionComponent', () => {
  let component: PlaceActionComponent;
  let fixture: ComponentFixture<PlaceActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceActionComponent ],
      imports: [IonicModule.forRoot(),PlaceAction,Direction]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
