import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { ChangePassPage } from '../change-pass/change-pass';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public app: App) {

  }

signOut(){
  this.app.getRootNav().setRoot(LoginPage);
  }

edit() {
  this.app.getRootNav().push(EditProfilePage);
}

change() {
  this.app.getRootNav().push(ChangePassPage);
}

}
