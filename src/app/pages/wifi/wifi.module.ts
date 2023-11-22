import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WifiPage } from './wifi.page';

import { WifiPageRoutingModule } from './wifi-routing.module';

import { MapComponentModule } from '../../components/map/map.component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MapComponentModule,
    WifiPageRoutingModule
  ],
  declarations: [WifiPage]
})
export class WifiPageModule {}
