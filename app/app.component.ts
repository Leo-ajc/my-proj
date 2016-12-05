import { Component } from '@angular/core';
import { HTTPTestService } from "./http-test.service";

@Component({
  selector: 'my-app',
  template : `
    <button (click)="onTestGet()">Test Get Request</button>
    <p>Output: {{getData}}</p>
    <button (click)="onTestPost()">Test Post Request</button><br>
    <p>Output: {{postData}}</p>
    
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
  getData: string;
  postData: string;
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

  onTestPost(){
    this._httpService.postJSON()
    .subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log('Finished')
    );
  }

  onTestGet(){
    this._httpService.getCurrentTime()
    .subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error),
      () => console.log('Finished')
    );
  }
}
