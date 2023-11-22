import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapComponentModule } from '../../components/map/map.component.module';
import { NoisePage } from './noise.page';

describe('Tab3Page', () => {
  let component: NoisePage;
  let fixture: ComponentFixture<NoisePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoisePage],
      imports: [IonicModule.forRoot(), MapComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NoisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
