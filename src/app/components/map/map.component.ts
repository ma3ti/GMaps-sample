import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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

    const myPosition = await this.mapService.getCurrentPosition();
    console.log(myPosition);
        
    const mapOptions: CreateMapArgs = {
      id: 'my-map',
      apiKey: environment.API_KEY_GOOGLE_MAPS,
      element: this.mapRef.nativeElement,
      forceCreate: true,
      config: {
        center: {
          //lat: 33.7,
          //lng: -117.9,
          lat: myPosition.coords.latitude,
          lng: myPosition.coords.longitude         
        },
        zoom: 10,
        streetViewControl: false,
        disableDefaultUI: true,
      },
    }

    await this.mapService.initMap(mapOptions);
    //await this.map.setMapType(MapType.Satellite);
    //await this.mapService.addMarker(myPosition);
  }

}
