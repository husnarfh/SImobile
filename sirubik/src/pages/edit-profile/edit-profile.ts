import { Component } from '@angular/core';
import { IonicPage, NavParams, App, NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';



import { UploadphotoPage } from '../uploadphoto/uploadphoto';

declare var cordova: any;


@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  lastImage: string = null;
  loading: Loading;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App,
    private camera: Camera, private transfer: Transfer, 
    private file: File, private filePath: FilePath, 
    public actionSheetCtrl: ActionSheetController, 
    public toastCtrl: ToastController, public platform: Platform, 
    public loadingCtrl: LoadingController
    ) {
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  save() {
    this.app.getRootNav().pop();

  }

  upload() {
    // this.app.getRootNav().pop();
    this.navCtrl.push(UploadphotoPage);

  }


}
