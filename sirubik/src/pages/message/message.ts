import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {

  constructor(public navCtrl: NavController) {

  }

openChat(){
  var tok = localStorage.getItem('token');
  
  console.log(tok);

  this.navCtrl.push(ChatPage);
}

}
