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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';

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
    UploadFilePage
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
    UploadFilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
