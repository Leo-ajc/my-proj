"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_test_service_1 = require("./http-test.service");
var AppComponent = (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent.prototype.submit = function (value) {
        var _this = this;
        this._httpService.getCombinations(value.combo)
            .subscribe(function (data) { return _this.comboData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('Finished'); });
    };
    AppComponent.prototype.onTestPost = function () {
        var _this = this;
        this._httpService.postJSON()
            .subscribe(function (data) { return _this.postData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('Finished'); });
    };
    AppComponent.prototype.onTestGet = function () {
        var _this = this;
        this._httpService.getCurrentTime()
            .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log('Finished'); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <button (click)=\"onTestGet()\">Test Get Request</button>\n    <p>Output: {{getData}}</p>\n    <button (click)=\"onTestPost()\">Test Post Request</button><br>\n    <p>Output: {{postData}}</p>\n    \n    <form #form=\"ngForm\" (ngSubmit)=\"submit(form.value)\">\n      <label>Number of combinations:</label>\n      <input name=\"combo\" type=\"text\" ngModel>\n      <button type=\"submit\">Submit</button>\n    </form>\n    <p>Combinations: {{comboData}}</p>\n  ",
            providers: [http_test_service_1.HTTPTestService]
        }), 
        __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map