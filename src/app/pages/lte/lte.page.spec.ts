import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapComponentModule } from '../../components/map/map.component.module';
import { LtePage } from './lte.page';

describe('Tab2Page', () => {
  let component: LtePage;
  let fixture: ComponentFixture<LtePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LtePage],
      imports: [IonicModule.forRoot(), MapComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LtePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
