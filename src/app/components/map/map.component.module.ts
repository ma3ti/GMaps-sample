import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapComponent } from './map.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [MapComponent],
  exports: [MapComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapComponentModule {}
