import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

import { environment } from 'src/environments/environment';

import { MapService } from 'src/app/services/map.service';
import { CreateMapArgs } from '@capacitor/google-maps/dist/typings/implementation';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @Input() name?: string;
  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  constructor(
    public mapService: MapService
    ){}


  ngOnInit(): void {
    console.log("MapComponent ngOnInit");
  }

  ionViewWillEnter(){
    console.log("MapComponent ionViewDidEnter");
    
    //this.createMap();
  }


  async initMap() {

    try{ 
      const myPosition = await this.mapService.getCurrentPosition();
      console.log(myPosition);
      await this.mapService.initMap(this.mapRef, myPosition);
      //await this.map.setMapType(MapType.Satellite);
      //await this.mapService.addMarker(myPosition);
    } 
    catch(e){  
      console.error(e);
    }
  }

}
