import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapComponentModule } from '../../components/map/map.component.module';
import { WifiPage } from './wifi.page';

describe('WifiPage', () => {
  let component: WifiPage;
  let fixture: ComponentFixture<WifiPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WifiPage],
      imports: [IonicModule.forRoot(), MapComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WifiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
