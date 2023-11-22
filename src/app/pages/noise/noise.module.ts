import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoisePage } from './noise.page';
import { MapComponentModule } from '../../components/map/map.component.module';
import { NoisePageRoutingModule } from './noise-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MapComponentModule,
    NoisePageRoutingModule
  ],
  declarations: [NoisePage]
})
export class NoisePageModule {}
