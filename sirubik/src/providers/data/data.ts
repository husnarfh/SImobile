import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class DataProvider {
	_favorites: string[] = [];
	HAS_LOGGED_IN = 'hasLoggedIn';
	HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

	apiUrl = 'http:localhost:8000/api';

  constructor(	
	public events: Events,
	private http: Http,
	public storage: Storage,
	public authHttp: HttpClient) {
  }

  login(login: {}) {
		return this.http.post(this.apiUrl+'/login', login)
		.map(response => response.json())
		.map(data => {
			this.setAuth(data);
			this.getUser();
			return data.token;
		});		
	};

	private setAuth(data) {
		return this.storage.set('token', data.access_token);
	}

	getUser() {

		// this.http.get('https://api.github.com/users')
        // .subscribe(response => console.log(response));

        return this.authHttp.get(this.apiUrl+'/user'); 


		// return this.authHttp.get(this.global.apiUrl+'/user')
		// .map(response => response)
		// .map(data => {
		// 	this.setUser(data);
		// 	return data;
		// });		
	};

	getToken() {
		return this.storage.get('token').then((val) => {
			return val;
		});  
	};
}
