import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  today = Date.now();
  profile: any;

  constructor(public navCtrl: NavController) {
    this.doRefresh;
    this.profile = JSON.parse(localStorage.getItem('profile'));
    
  }
  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      // console.log('Async operation has ended');
      this.navCtrl.setRoot(this.navCtrl.getActive().component).then(refresher.complete());
    
    }, 1000);
    

  }
  
}
