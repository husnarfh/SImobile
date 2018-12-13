import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UploadFilePage } from '../upload-file/upload-file';
import { MateriPage } from '../materi/materi';

@Component({
  selector: 'page-file',
  templateUrl: 'file.html'
})

export class FilePage {
  information: any[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public app: App,
    private http: Http) {
    let localData = this.http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    });
  }

  bukaMateri(mata_pelajaran, kelas) {
    // console.log(mata_pelajaran);
    // console.log(kelas);
    var pilih = JSON.stringify({mata_pelajaran:mata_pelajaran, kelas:kelas});
    localStorage.setItem("materi_select", pilih);
    this.navCtrl.push(MateriPage);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  toggleSection(i) {
    this.information[i].open = !this.information[i].open; 
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilePage');
  }

  addfile() {
    this.app.getRootNav().push(UploadFilePage);
  }

}
