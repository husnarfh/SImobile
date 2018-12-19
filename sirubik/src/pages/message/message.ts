import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { ListTemanPage } from '../list-teman/list-teman';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {

  constructor(public navCtrl: NavController,
    public app: App ) {

  }

openChat(){
  var tok = localStorage.getItem('profile');
  console.log(tok);
  
  this.app.getRootNav().push(ChatPage);
}

listTeman(){
  this.app.getRootNav().push(ListTemanPage);
}

}
