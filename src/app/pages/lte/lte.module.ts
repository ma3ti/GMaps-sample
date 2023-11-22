import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LtePage } from './lte.page';
import { MapComponentModule } from '../../components/map/map.component.module';
import { LtePageRoutingModule } from './lte-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MapComponentModule,
    LtePageRoutingModule
  ],
  declarations: [LtePage]
})
export class LtePageModule {}
