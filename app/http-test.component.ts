import { Component } from '@angular/core';
import { HTTPTestService } from "./http-test.service";

@Component({
  selector: 'http-test',
  template : `
    <button>Test Get Request</button>
    <p>Output: {{getData}}</p>
    <button>Test Post Request</button>><br>
      <p>Output: {{postData}}</p>
  `,
  providers: [HTTPTestService]
})
export class HTTPTestComponent {
  getData: string;
  postData: string;

  constructor (private _httpService: HTTPTestService) {}

  onTestGet(){
    this._httpService.getCurrentTime()
    .subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error),
      () => console.log('Finished')
    );
  }

}
