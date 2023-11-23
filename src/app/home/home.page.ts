import { Component } from '@angular/core';

import { Network, NetworkPlugin } from '@capacitor/network';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  network!: NetworkPlugin;
  connectionType!: string;
  conn: boolean = false;

  constructor() {}

  ionViewWillEnter(){
    console.log('HomeComponent ionViewWillEnter');
    this.logCurrentNetworkStatus();
  }


    
  async logCurrentNetworkStatus() {
      
    try{
      const status= await Network.getStatus();
      console.log('Network status:', String(status));

      this.connectionType = JSON.stringify(status.connectionType);
      console.log('Network status:', this.connectionType);
      this.conn = true;
      
      console.log(this.conn);
      
    }
    catch(e){
      console.error(e);
      
    }
    

  };

   

}
