import {Observable} from "RxJS/Rx";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HTTPTestService {
  constructor(private http: Http) {}

  getCombinations(value) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get('https://sheltered-thicket-63665.herokuapp.com/' + value )
      .map(res => res.json())
  }
}
