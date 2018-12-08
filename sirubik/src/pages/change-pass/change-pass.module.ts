import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangePassPage } from './change-pass';

@NgModule({
  declarations: [
    ChangePassPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangePassPage),
  ],
})
export class ChangePassPageModule {}
