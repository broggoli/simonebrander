import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArbeitPage } from './arbeit.page';

describe('ArbeitPage', () => {
  let component: ArbeitPage;
  let fixture: ComponentFixture<ArbeitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbeitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArbeitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
