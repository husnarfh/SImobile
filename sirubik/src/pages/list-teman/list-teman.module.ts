import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTemanPage } from './list-teman';

@NgModule({
  declarations: [
    ListTemanPage,
  ],
  imports: [
    IonicPageModule.forChild(ListTemanPage),
  ],
})
export class ListTemanPageModule {}
