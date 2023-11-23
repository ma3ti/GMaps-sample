import { ElementRef, Injectable } from '@angular/core';

import { GoogleMap, Marker } from '@capacitor/google-maps';
import { Geolocation, Position } from '@capacitor/geolocation';
import { CreateMapArgs } from '@capacitor/google-maps/dist/typings/implementation';

import { environment } from 'src/environments/environment';
import { ModalPage } from '../pages/modal/modal.page';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map!: GoogleMap;
  myPosition!: Position


  constructor(
    private modalCtrl: ModalController) { }

  

  async initMap(
    mapReference: ElementRef<HTMLElement>,
     myPosition: Position): Promise<void> {

    const mapOptions: CreateMapArgs = {
      id: 'my-map',
      apiKey: environment.API_KEY_GOOGLE_MAPS,
      element: mapReference.nativeElement,
      forceCreate: true,
      config: {
        center: {
          //lat: 33.7,
          //lng: -117.9,
          lat: myPosition.coords.latitude,
          lng: myPosition.coords.longitude         
        },
        zoom: 18,
        streetViewControl: false,
        disableDefaultUI: true,
      },
    }

    this.map = await GoogleMap.create(mapOptions);

  }


  async getCurrentPosition(){
    this.myPosition = await Geolocation.getCurrentPosition();
    console.log(this.myPosition);
    return this.myPosition;
  }

  getMap(): GoogleMap{
    return this.map;
  }



  async addMarker(positions: Position){
    const marker: Marker = 
      {
        coordinate: {
          lat: positions.coords.latitude,
          lng: positions.coords.longitude
          //lat: 33.6,
          //lng: -117.9
        },
        title: 'My position',
        snippet: 'My position'
      };
      
      await this.map.addMarker(marker);
  
      this.map.setOnMarkerClickListener(async (marker) => {
        
        const modal = await this.modalCtrl.create({
          component: ModalPage,
          componentProps: {
            marker,
          },
          breakpoints: [0, 0.3],
          initialBreakpoint: 0.3,
          //backdropDismiss: false,
          showBackdrop: false
        });
  
        modal.present();
      })
  }
  





}
