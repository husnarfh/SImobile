import { Http, Headers } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, AlertController, Events, ToastController, App, LoadingController, MenuController } from 'ionic-angular';
import { RequestOptions } from '@angular/http';

@Component({
    selector: 'page-schedule',
    templateUrl: 'schedule.html'
})
export class SchedulePage {

    today = Date.now();
    profile: any;
    schedule: any;
    token: any;

    constructor(public navCtrl: NavController, public app:App
        ,public http:Http) {
        this.profile = "";
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
        this.token = (localStorage.getItem('token'));
        this.getschedule();
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            // console.log('Async operation has ended');
            this.navCtrl.setRoot(this.navCtrl.getActive().component).then(refresher.complete());

        }, 1000);


    }
    getschedule(){
        var link = "http://localhost:8000/api/infojadwalsendiri";
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + this.token);
        let options = new RequestOptions({ headers: headers });
        console.log(link);

        this.http.get(link, options).subscribe(data => {
            
            this.schedule = data.json()["hasil"]
            console.log(this.schedule);

            // localStorage.set("schedule", JSON.stringify(this.schedule))
        })
        console.log(this.schedule);
    
    }

}