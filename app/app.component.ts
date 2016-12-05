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
