import { Component } from '@angular/core';

import { MapService } from '../services/map.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public mapService: MapService) {}

  ionViewWillEnter(){
    //this.mapService.initMap();
    
  }

}
