import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { SchedulePage } from '../pages/schedule/schedule';
import { FilePage } from '../pages/file/file';
import { MessagePage } from '../pages/message/message';
import { TabsPage } from '../pages/tabs/tabs';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { ChangePassPage } from '../pages/change-pass/change-pass';
import { UploadFilePage } from '../pages/upload-file/upload-file';
import { ChatPage } from '../pages/chat/chat';
import { UploadphotoPage } from '../pages/uploadphoto/uploadphoto';
import { MateriPage } from '../pages/materi/materi';
import { ListTemanPage } from '../pages/list-teman/list-teman';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';

// baru
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { ProfileTemanPage } from '../pages/profile-teman/profile-teman';


@NgModule({
  declarations: [
    MyApp,
    SchedulePage,
    FilePage,
    MessagePage,
    ProfilePage,
    TabsPage,
    LoginPage,
    EditProfilePage,
    ChangePassPage,
    UploadFilePage,
    ChatPage,
    UploadphotoPage,
    MateriPage,
    ListTemanPage,
    ProfileTemanPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SchedulePage,
    FilePage,
    MessagePage,
    ProfilePage,
    TabsPage,
    LoginPage,
    EditProfilePage,
    ChangePassPage,
    UploadFilePage,
    ChatPage,
    UploadphotoPage,
    MateriPage,
    ListTemanPage,
    ProfileTemanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,

    File,
    Transfer,
    Camera,
    FilePath,
    FileTransfer,
    FileChooser
  ]
})
export class AppModule {}
