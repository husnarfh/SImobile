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
  
    this.profile = JSON.parse(localStorage.getItem('profile'));
    
  }

  
}
