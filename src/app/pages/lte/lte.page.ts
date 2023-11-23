import { Component, HostListener, ViewChild } from '@angular/core';
import { MapComponent } from 'src/app/components/map/map.component';

@Component({
  selector: 'app-lte',
  templateUrl: 'lte.page.html',
  styleUrls: ['lte.page.scss']
})
export class LtePage {

  @ViewChild(MapComponent) mapComponent!: MapComponent;

  constructor() {}

  ionViewDidEnter(){

    console.log('LtePage ionViewDidEnter');
    //this.mapComponent.mapService.getMap();
    this.mapComponent.initMap();
  }


  

}
