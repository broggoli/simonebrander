import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FigurenbeschriebComponent } from './figurenbeschrieb.component';

describe('FigurenbeschriebComponent', () => {
  let component: FigurenbeschriebComponent;
  let fixture: ComponentFixture<FigurenbeschriebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigurenbeschriebComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FigurenbeschriebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
