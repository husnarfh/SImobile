import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Http, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';

/**
 * Generated class for the MateriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materi',
  templateUrl: 'materi.html',
})
export class MateriPage {
  // wajib
  token: any;
  data: any;
  materi: any;
  hasil_materi: any;
  kelas: any;
  mata_pelajaran: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private transfer: FileTransfer, private file: File,
    public http: Http,
    ) {
    this.materi = JSON.parse(localStorage.getItem("materi_select"));
    this.token = (localStorage.getItem("token"));
    this.load();
  } 

  load(){
    var link = "http://localhost:8000/api/materishowselect";
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.token);
    let options = new RequestOptions({ headers: headers });
    this.data = JSON.stringify(this.materi);
    this.http.post(link, this.data, options).subscribe(data => {
      var response = data.json();
      this.hasil_materi = response["hasil"];
      if (this.hasil_materi){
        this.kelas = this.hasil_materi[0].kelas;
        this.mata_pelajaran = this.hasil_materi[0].mata_pelajaran;

      }
      console.log(this.hasil_materi);
    }
      ,error=>{
        console.log("error")
      })
  

  }
  // download(url){
  //   var url, nama;
  //   const fileTransfer: FileTransferObject = this.transfer.create();
  //   fileTransfer.download(url, nama);
  //   fil
  // }

  download(file_name) {
    const fileTransfer: FileTransferObject = this.transfer.create();

    var url = 'http://localhost:8000/materi/' + file_name;
    fileTransfer.download(url, this.file.dataDirectory + file_name).then((entry) => {
      console.log('download complete: ' + entry.toURL());
      // bikin toast
    }, (error) => {
        console.log("oops")
      // bikin toast
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriPage');
  }

}
