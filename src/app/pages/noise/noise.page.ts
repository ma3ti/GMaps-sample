import { Component, ViewChild } from '@angular/core';
import { MapComponent } from 'src/app/components/map/map.component';

@Component({
  selector: 'app-noise',
  templateUrl: 'noise.page.html',
  styleUrls: ['noise.page.scss']
})
export class NoisePage {

  @ViewChild(MapComponent) mapComponent!: MapComponent;

  constructor() {}

  ionViewDidEnter(){
    console.log('NoisePage ionViewDidEnter');
    this.mapComponent.initMap();
    
  }

}
