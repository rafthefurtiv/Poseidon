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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pdf_1 = require("./pdf");
var http_1 = require("@angular/common/http");
var database_1 = require("angularfire2/database");
var ContactPage = /** @class */ (function () {
    function ContactPage(http, db) {
        this.http = http;
        this.db = db;
        this.res = new pdf_1.Risultati();
        this.caricaAll();
    }
    ContactPage.prototype.caricaAll = function () {
        var _this = this;
        this.http.get('https://poseidon-8bcf8.firebaseio.com/risultati.json').subscribe(function (response) {
            _this.res = JSON.parse(JSON.stringify(response));
        });
    };
    ContactPage.prototype.open = function (url) {
        window.open(url, '_system', 'location=yes');
    };
    ContactPage = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: 'contact.page.html',
            styleUrls: ['contact.page.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, database_1.AngularFireDatabase])
    ], ContactPage);
    return ContactPage;
}());
exports.ContactPage = ContactPage;
//# sourceMappingURL=contact.page.js.map