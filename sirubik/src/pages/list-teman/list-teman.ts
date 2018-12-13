import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ProfileTemanPage } from '../profile-teman/profile-teman';
/**
 * Generated class for the ListTemanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-teman',
  templateUrl: 'list-teman.html',
})
export class ListTemanPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTemanPage');
  }

public profileteman(){
  this.app.getRootNav().push(ProfileTemanPage);
}
}
