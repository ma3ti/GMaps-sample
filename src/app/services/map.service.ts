import { Injectable } from '@angular/core';

import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation, Position } from '@capacitor/geolocation';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  map!: GoogleMap;
  myPosition!: Position


  constructor() { }

  async initMap(options: any): Promise<void> {
    this.map = await GoogleMap.create(options);
  }


  async getCurrentPosition(){
    this.myPosition = await Geolocation.getCurrentPosition();
    console.log(this.myPosition);
    return this.myPosition;
  }
}
