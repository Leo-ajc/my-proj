###My first Angular2 Project and therefore a total hack :). 

This incomplete Angular2 project that accesses my API at:

https://rocky-fortress-79177.herokuapp.com/15
https://github.com/Leo-ajc/make_change

I am unfamiliar with Angular2 and had a lot of trouble
deploying this to a public server.

```javascript
// app/app.component.ts
import { Component } from '@angular/core';
import { HTTPTestService } from "./http-test.service";

@Component({
  selector: 'my-app',
  template : `
    <form #form="ngForm" (ngSubmit)="submit(form.value)">
      <label>Number of combinations:</label>
      <input name="combo" type="text" ngModel>
      <button type="submit">Submit</button>
    </form>
    <p>Combinations: {{comboData}}</p>
  `,
  providers: [HTTPTestService]
})
export class AppComponent  {
  comboData: string;

  constructor (private _httpService: HTTPTestService) {}

  submit(value: any) {
    this._httpService.getCombinations(value.combo)
    .subscribe(
      data => this.comboData = JSON.stringify(data),
      error => alert(error),
      () => console.log('Finished')
    );
  }
}
```

```javascript
// app/http-test.service.ts
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
```



