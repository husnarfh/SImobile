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
import { Http, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';



import { UploadphotoPage } from '../uploadphoto/uploadphoto';

declare var cordova: any;


@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  lastImage: string = null;
  data: any = {}; 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App,
    private camera: Camera, private transfer: Transfer, 
    private file: File, private filePath: FilePath, 
    public actionSheetCtrl: ActionSheetController, 
    public toastCtrl: ToastController, public platform: Platform, 
    public loadingCtrl: LoadingController,
    public http: Http
    ) {
    
    this.data.nama_lengkap = "";
    this.data.telepon = "";
    this.data.id_line = "";
    this.data.token = "";
    this.data = JSON.parse(localStorage.getItem('profile'));
    console.log(this.data);
    this.http = http;

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  save() { 

    this.data.token = localStorage.getItem('token');   
    var link = 'http://localhost:8000/api/profileedit';
    var data = JSON.stringify({ nama_lengkap: this.data.nama_lengkap, 
      no_hp: this.data.telepon,
      id_line: this.data.id_line,
    });

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.data.token);
    let options = new RequestOptions({ headers: headers });

    this.http.post(link, data, options).subscribe(data => {
      var response = data.json();
      if(response.status == "200"){
        console.log(response.data);
        var toast = this.toastCtrl.create({
          message: 'Data sukses tersimpan',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        

        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.data.token);
        let options = new RequestOptions({ headers: headers });
        this.http.get(link, options).subscribe(data => {

          var response = data.json();
          localStorage.setItem('profile', JSON.stringify(response['hasil'][0]));

        }, error => console.log("profile can't attach")
        );


        return;
        // this.app.getRootNav().pop();
        
      }
    },
    error => 
    {
      console.log("Data not saved");
      var toast = this.toastCtrl.create({
        message: 'Data tidak tersimpan. Cek koneksi internet',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
  }    
    
  )

    this.app.getRootNav().pop();

  }

  upload() {
    // this.app.getRootNav().pop();
    this.navCtrl.push(UploadphotoPage);

  }


}
