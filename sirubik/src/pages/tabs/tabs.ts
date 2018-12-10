import { Component } from '@angular/core';

import { SchedulePage } from '../schedule/schedule';
import { MessagePage } from '../message/message';
import { FilePage } from '../file/file';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SchedulePage;
  tab2Root = FilePage;
  tab3Root = MessagePage;
  tab4Root = ProfilePage;

  constructor() {
    console.log(localStorage.getItem('userdata'));
  }
}
