import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { ListTemanPage } from '../list-teman/list-teman';
import { Http, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {
  token: any;
  data: any;
  constructor(public navCtrl: NavController,
    public app: App,
    public http: Http,
    ) {
    
    var link = "http://localhost:8000/api/dialog";
    this.token = (localStorage.getItem("token"));
    this.getdialog();
    
  }

getdialog(){
  this.token = (localStorage.getItem("token"));
  var link = "http://localhost:8000/api/dialog";
  let headers = new Headers();
  headers.append('Authorization', 'Bearer ' + this.token);
  let options = new RequestOptions({ headers: headers });
  this.http.get(link, options).subscribe(data => {
    var response = data.json();
    this.data = response["hasil"];
    console.log(this.data);
  }, error=>{
    console.log("Connection Error");
  })
}

openChat(other_id){
  // var tok = localStorage.getItem('profile');
  // console.log(tok);
  console.log(other_id);
  localStorage.setItem("other_id", other_id);
  // this.app.getRootNav().push(ChatPage);
  this.navCtrl.push(ChatPage);

}

listTeman(){
  this.app.getRootNav().push(ListTemanPage);
}


  public doRefresh(refresher) {

    setTimeout(() => {
      // console.log('Async operation has ended');
      this.navCtrl.setRoot(this.navCtrl.getActive().component).then(refresher.complete());

    }, 1000);
  }

}
