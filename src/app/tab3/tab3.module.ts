import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { MapComponentModule } from '../components/map/map.component.module';
import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MapComponentModule,
    Tab3PageRoutingModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
