//import {Injectable} from '@angular2/core';
//import {Http,Headers} from '@angular2/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import {Observable} from 'rxjs/Rx';
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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var HTTPTestService = (function () {
    function HTTPTestService(http) {
        this.http = http;
    }
    HTTPTestService.prototype.getCombinations = function (value) {
        var params = 'json=' + value;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get('http://localhost:9292/123')
            .map(function (res) { return res.json(); });
    };
    HTTPTestService.prototype.getCurrentTime = function () {
        return this.http.get('http://date.jsontest.com')
            .map(function (res) { return res.json(); });
    };
    HTTPTestService.prototype.postJSON = function () {
        var json = JSON.stringify({ var1: 'test', var2: 3 });
        var params = 'json=' + json;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://validate.jsontest.com', params, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    HTTPTestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HTTPTestService);
    return HTTPTestService;
}());
exports.HTTPTestService = HTTPTestService;
//# sourceMappingURL=http-test.service.js.map