import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Events, ToastController, App, LoadingController, MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { Http } from '@angular/http';
import { DataProvider } from '../../providers/data/data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  loading: any;
  login = { email:'', password:'' };
  data: any;

    constructor(
      public app: App,
      public navCtrl: NavController,
      public menuCtrl: MenuController,
      public loadCtrl: LoadingController,
      public toastCtrl: ToastController,
      public alertCtrl: AlertController,
      public events: Events,
      public http: Http) {

    }


loader(){
      let loader = this.loadCtrl.create({
        content: "Please wait...",
        duration: 1000
      });
      loader.present();
    }

onLogin(form: NgForm) {

      if (form.valid) {
  
        let loading = this.loadCtrl.create({});
        loading.present();
  
        this.data.login(this.login).subscribe(data => {
            this.events.publish('user:login');
            loading.dismiss();
            this.navCtrl.setRoot(TabsPage);
          },
          error => {
            loading.dismiss();
            this.showError(error);
        });
        
      }
    }
  
signIn(){
  this.navCtrl.push(TabsPage);
}

showError(error) {
  console.log(error);
  let alert = this.alertCtrl.create({
    title: 'Error',
    // message: error.json().message,
    message: 'Wrong user or password',
    buttons: ['OK']
  });
  alert.present();
}

}
