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
  data:any = {}; 

    constructor(
      public app: App,
      public navCtrl: NavController,
      public menuCtrl: MenuController,
      public loadCtrl: LoadingController,
      public toastCtrl: ToastController,
      public alertCtrl: AlertController,
      public events: Events,
      public http: Http) {
        this.menuCtrl.enable(true);
        this.data.email = "";
        this.data.password = "";
        this.data.response = "";
        this.http = http;
    }


loader(){
      let loader = this.loadCtrl.create({
        content: "Please wait...",
        duration: 1000
      });
      loader.present();
    }

login(){
      var link = 'http://localhost/api/login';
      var newLogin = JSON.stringify({email: this.data.email, password: this.data.password});
       console.log(newLogin);
      this.http.post(link, newLogin).subscribe(data => {
        var response = data.json();
            // this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
        if(response.status == "200"){
          console.log(response.data);
         //this.data.login(response.data, "user");
          this.loader();
        this.app.getRootNav().setRoot(TabsPage);
          // this.navCtrl.setRoot(ProfilPage);
        } else {
          // If account not found
          var toast = this.toastCtrl.create({
            message: 'Incorrect username or password',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }
      }, error => {
        console.log("Oooops!");
      });
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
