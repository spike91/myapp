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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Students List';
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n  <div style=\"background-color: #607D8B;\">\n    <h1><br></h1>\n\n    <nav>\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      <a routerLink=\"/students\" routerLinkActive=\"active\">All students</a>\n      <a routerLink=\"/rdir31\" routerLinkActive=\"active\">RDIR31</a>\n      <a routerLink=\"/rdir32\" routerLinkActive=\"active\">RDIR32</a>\n    </nav>\n    </div>\n    <router-outlet></router-outlet>  <!-- Router Outlet \u2013 \u044D\u0442\u043E \u043E\u0434\u043D\u0430 \u0438\u0437 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u043C\u044B\u0445 \u043C\u043E\u0434\u0443\u043B\u0435\u043C RouterModule.\n                                        \u0420\u043E\u0443\u0442\u0435\u0440 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u043A\u0430\u0436\u0434\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u043D\u0435\u043F\u043E\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043F\u043E\u0434 <router-outlet>, \u043A\u043E\u0433\u0434\u0430 \u043C\u044B \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0435\u043C\u0441\u044F \u043F\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E.  -->\n\n  ",
            styleUrls: ['app.component.css'] /* указываем внешний файл для стилей */
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app.component.js.map