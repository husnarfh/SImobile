import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      var token = "";
      // token = localStorage.getItem("token");
      // if(token == ""){
      this.rootPage = LoginPage;        
      // }
      // else{
        // this.rootPage = TabsPage;
      // }
      // this.rootPage = TabsPage;

        // this.rootPage = token
        // ? TabsPage
        // : LoginPage;

        
    });
  }

  public debug(aaa){
    console.log(typeof(aaa));
  }
}
