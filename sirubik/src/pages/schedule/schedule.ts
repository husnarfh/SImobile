import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  today = Date.now();

  constructor(public navCtrl: NavController) {

    console.log(localStorage.getItem('userdata'));
  }

  
}
