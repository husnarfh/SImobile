import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { ChangePassPage } from '../change-pass/change-pass';
import { Http, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  profile: any;
  token: any;
  constructor(
    public navCtrl: NavController, 
    public app: App,
    public http: Http,
    public domSanitizer: DomSanitizer
    ) {
    
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.profile.image = ("data:image/jpg;base64,"+ this.profile.image);
    this.token = localStorage.getItem('token');
    this.http = http;
  }

signOut(){
  
  var link = "http://localhost:8000/api/logout";
  let headers = new Headers();
  headers.append('Authorization', 'Bearer ' + this.token);
  let options = new RequestOptions({ headers: headers });

  this.http.get(link, options).subscribe(data => {}
    ,error=> {
      console.log("oops");
      return;
    }
  );
  console.log("Log out sukses");

  this.app.getRootNav().setRoot(LoginPage);

}

edit() {
  console.log(this.profile);
  this.app.getRootNav().push(EditProfilePage);
}

change() {
  this.app.getRootNav().push(ChangePassPage);
}

}
