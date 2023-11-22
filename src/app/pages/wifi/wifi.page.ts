import { Component, ViewChild } from '@angular/core';

import { MapService } from '../../services/map.service';
import { MapComponent } from '../../components/map/map.component';

@Component({
  selector: 'app-wifi',
  templateUrl: 'Wifi.page.html',
  styleUrls: ['Wifi.page.scss']
})
export class WifiPage {

  @ViewChild(MapComponent) mapComponent!: MapComponent;

  constructor(public mapService: MapService) {}

  ionViewWillEnter(){

    this.mapComponent.initMap();
    
  }

}
