import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
//Extra Libraries, Need to install
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { Http, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { LoadingController, ToastController } from 'ionic-angular';
/**
 * Generated class for the UploadFilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-file',
  templateUrl: 'upload-file.html',
})
export class UploadFilePage {
  uri: any;
  fileName: any;
  uploadStatus: any;
  uploadMessage: any;
  token: any;
  headers: any;
  deskripsi: any;
  kelas: any;
  nama_materi: any;
  mata_pelajaran: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private transfer: FileTransfer,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private fileChooser: FileChooser, private filePath: FilePath,
    public http: Http
    
    ) {
      this.token = localStorage.getItem('token');
    this.headers = new Headers();
    this.headers.append('Authorization', 'Bearer ' + this.token);
    this.http = http;
  }

  public save(){
    console.log(this.deskripsi);
    var link = 'http://localhost:8000/api/materiupload';

    var data = JSON.stringify({
      kelas: this.kelas,
      nama_materi: this.nama_materi,
      mata_pelajaran: this.mata_pelajaran,
      deskripsi: this.deskripsi,
    });

    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.token);
    let options = new RequestOptions({ headers: headers });
    this.http.post(link, data, options).subscribe(data => {
      var response = data.json();
      if (response.status == "200") {
        console.log(response.data);
        var toast = this.toastCtrl.create({
          message: 'Data sukses tersimpan',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();

        return;
        // this.app.getRootNav().pop();

      }
    }, error=>{
      console.log("error");
    });
  }

  // harus di browser
  public uploadFile() {
    //Choose the file using filechoose library
    this.fileChooser.open()
      .then(uri => {
        this.uri = uri;
        return uri;
      })
      //Get filename using filepath library
      .then(uri => this.filePath.resolveNativePath(uri))
      .then(filePath => {
        let filename: any = filePath.split('/');
        filename = filename[filename.length - 1];
        return (filename)
      })
      //Start Transfering using file transfer plugin
      .then(filename => {
        this.fileName = filename;
        let loader = this.loadingCtrl.create({
          content: "Uploading..."
        });
        loader.present();
        const fileTransfer: FileTransferObject = this.transfer.create();
        let options: FileUploadOptions = {
          fileKey: 'file',
          fileName: filename,
          chunkedMode: false,
          headers: this.headers
        }
        fileTransfer.upload(this.uri, 'https://localhost:8000/api/uploadfile', options)
          .then((data) => {
            this.uploadStatus = data.responseCode;
            this.uploadMessage = JSON.stringify(data.response);
            console.log(data + " Uploaded Successfully");
            alert(JSON.stringify(data.response));
            loader.dismiss();
            this.presentToast("Image uploaded successfully");
          }, (err) => {
            console.log(err);
            loader.dismiss();
            this.presentToast(err);
          });
      })
      .catch(err => alert(err));
  }

  public presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadFilePage');
  }

}
