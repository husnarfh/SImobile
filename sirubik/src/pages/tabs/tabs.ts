import { Component } from '@angular/core';

import { SchedulePage } from '../schedule/schedule';
import { MessagePage } from '../message/message';
import { FilePage } from '../file/file';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SchedulePage;
  tab2Root = FilePage;
  tab3Root = MessagePage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
