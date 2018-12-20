import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { ViewChild } from '@angular/core';
import { Content} from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  token: any;
  other_name: any;
  other_id: any;
  profile: any;
  message_send: any;
  messages: any;
  data: any;
  @ViewChild('content') content: Content;
  constructor(public navCtrl: NavController, 
    public http: Http,
    public navParams: NavParams
    
    ) {
    this.profile = JSON.parse(localStorage.getItem("profile"));
    this.token = (localStorage.getItem("token"));
    this.other_id = (localStorage.getItem("other_id"));
    this.Load();

   
  }

  ionViewDidEnter() {
    this.content.scrollToBottom(300)

    console.log('ionViewDidEnter ChatPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  Load(){
    var link = "http://localhost:8000/api/retrieve";
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.token);
    let options = new RequestOptions({ headers: headers });
    this.data = JSON.stringify({"other_id":this.other_id});
    this.http.post(link, this.data, options).subscribe(data => {
      var response = data.json();
      this.messages = response["hasil"];
      this.other_name = response["other_name"];
      console.log(this.messages);
      console.log(this.other_id);
    },
       
      error=>{
        console.log("oops");

      })


  }

  Send(){

    // baca
    console.log(this.message_send);
    
    this.data = JSON.stringify({ "other_id": this.other_id, "messages":this.message_send });
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });

    headers.append('Authorization', 'Bearer ' + this.token);

    // kirim
    var link = "http://localhost:8000/api/send";
    this.http.post(link, this.data, options).subscribe(data => {
      var response = data.json();
    },

      error => {
        console.log("oops");
      })
    
    // selesai
  }


}
