import { Component } from '@angular/core';
import { IonicPage, NavParams, App, NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { RequestOptions } from '@angular/http';
import { Http, Headers } from '@angular/http';
import { CameraOptions } from "@ionic-native/camera";
import { AlertController } from "ionic-angular";

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

declare var cordova: any;


 @IonicPage()
@Component({
  selector: 'page-uploadphoto',
  templateUrl: 'uploadphoto.html',
})
export class UploadphotoPage {
  // {"image":"base64"} 
   ori: any;
   public photos: any;
   public base64Image: string;
   public fileImage: string;
   public responseData: any;
   private userDetails: any;
  public token: any;
    public options: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    private camera: Camera, private transfer: Transfer,
    private file: File, private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController, public platform: Platform,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http:Http
    ) {
    let headers = new Headers();
    this.token = localStorage.getItem("token");
    this.http = http;
    headers.append('Authorization', 'Bearer ' + this.token);
    this.options = {
      headers: headers
    };


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  //const fileTransfer = this.transfer.create();
   ngOnInit() {
     this.photos = [];
   }

   deletePhoto(index) {
     let confirm = this.alertCtrl.create({
       title: "Yakin ingin menghapus foto?",
       message: "",
       buttons: [
         {
           text: "No",
           handler: () => {
             console.log("Disagree clicked");
           }
         },
         {
           text: "Yes",
           handler: () => {
             console.log("Agree clicked");
             this.photos.splice(index, 1);
           }
         }
       ]
     });
     confirm.present();
   }

   takePhoto() {
     console.log("Taking Photo");

     const options: CameraOptions = {
       quality: 50,
       sourceType: this.camera.PictureSourceType.CAMERA,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE,
       targetWidth: 450,
       targetHeight: 450,
       saveToPhotoAlbum: false
     };

     this.camera.getPicture(options).then(
       imageData => {
         this.base64Image = "data:image/jpeg;base64," + imageData;
         this.photos.push(this.base64Image);
         this.photos.reverse();
         this.sendData(imageData);
       },
       err => {
         console.log(err);
       }
     );
   }

   browsePhoto() {
     console.log("Browsing Photo");

     const options: CameraOptions = {
       quality: 50,
       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE,
       targetWidth: 450,
       targetHeight: 450,
       saveToPhotoAlbum: false
     };

     this.camera.getPicture(options).then(
       imageData => {
         var pic = 'data:image/jpg;base64,' + imageData;
         if (pic.slice(22, 27) != 'iVBOR' && pic.slice(22, 27) != '/9j/4') {
           console.log('slice:');
           console.log(pic.slice(22, 27));
           let alert = this.alertCtrl.create({
             title: 'Gagal!',
             subTitle: 'Mohon masukan gambar berformat PNG atau JPG',
             buttons: ["OK"]
           });
           alert.present();
           return;
         }
         this.base64Image = pic;
         this.photos.push(this.base64Image);
         this.photos.reverse();
         this.sendData(imageData);
       },
       err => {
         console.log(err);
       }
     );
   }

   sendData(imageData) {
     console.log(imageData);
     var url = "http://localhost:8000/api/uploadimage";
     var data = JSON.stringify({image:imageData});
     console.log(data);
     this.http.post(url, data, this.options).subscribe(data=>{
        console.log("file uploaded kayanya");
     }
      , error=>console.log("Jaringan error"));
   }

}
