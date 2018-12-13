import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private transfer: FileTransfer, private file: File
    ) {
  
  }
  
  // download(url){
  //   var url, nama;
  //   const fileTransfer: FileTransferObject = this.transfer.create();
  //   fileTransfer.download(url, nama);
  //   fil
  // }

  download() {
    const fileTransfer: FileTransferObject = this.transfer.create();

    var url = 'http://localhost:8000/materi/hehe.pdf';
    fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
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
