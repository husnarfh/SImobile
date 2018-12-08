import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadFilePage } from './upload-file';

@NgModule({
  declarations: [
    UploadFilePage,
  ],
  imports: [
    IonicPageModule.forChild(UploadFilePage),
  ],
})
export class UploadFilePageModule {}
