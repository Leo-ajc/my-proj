//import {Injectable} from '@angular2/core';
//import {Http,Headers} from '@angular2/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import {Observable} from 'rxjs/Rx';



import {Observable} from "RxJS/Rx";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HTTPTestService {
  constructor(private http: Http) {}

  getCombinations(value) {
    var params = 'json=' + value;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get('http://localhost:9292/123' )
      .map(res => res.json())
  }

  getCurrentTime() {
    return this.http.get('http://date.jsontest.com')
      .map(res => res.json())
  }

  postJSON() {
    var json = JSON.stringify({var1: 'test', var2: 3});
    var params = 'json=' + json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://validate.jsontest.com', params, {
      headers: headers
    })
    .map(res => res.json());
    )
  }
}
