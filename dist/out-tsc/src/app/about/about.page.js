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
var database_1 = require("angularfire2/database");
var recordSocietari_1 = require("./recordSocietari");
var records_1 = require("./records");
var http_1 = require("@angular/common/http");
var AboutPage = /** @class */ (function () {
    function AboutPage(http, db) {
        this.http = http;
        this.db = db;
        this.recordSocietari = new recordSocietari_1.RecordSocietari();
        this.recKey = [];
        this.cat = 'U20';
        this.ses = 0;
        this.lun = 0;
        this.caricaAll();
        // Utilizzare solo la prima volta per l'inizializzazione.
        //this.createBaseRecordSocietari();
    }
    AboutPage.prototype.insert = function () {
        var recSoc = new recordSocietari_1.RecordSocietari();
        recSoc.records[0] = new records_1.Records();
        recSoc.records[0].categoria = 'M25';
        recSoc.records[0].gara = '50SL';
        recSoc.records[0].lunghezza = 0;
        recSoc.records[0].luogo = '2018 Aversa';
        recSoc.records[0].nome = 'Raffaele Barbato';
        recSoc.records[0].sesso = 0;
        recSoc.records[0].tempo = '31.34';
        //recSoc.records[0] = Records.createRecordProva();
        var savedAtl = this.db.list('recordSocietari');
        savedAtl.set('recordSocietari', recSoc);
    };
    AboutPage.prototype.updateRecordSocietari = function (recSocTemp) {
        var savedAtl = this.db.list('recordSocietari');
        savedAtl.set('recordSocietari', recSocTemp);
    };
    AboutPage.prototype.addRecord = function () {
        var _this = this;
        var recSocTemp = new recordSocietari_1.RecordSocietari();
        this.http.get('https://poseidon-8bcf8.firebaseio.com/recordSocietari/recordSocietari.json').subscribe(function (response) {
            recSocTemp = JSON.parse(JSON.stringify(response));
            if (recSocTemp == null) {
            }
            else {
                var rec = records_1.Records.createRecordProva();
                var sesso = void 0;
                var lunghezza = void 0;
                if (rec.sesso == 0) {
                    sesso = "Maschi";
                }
                else {
                    sesso = "Femmine";
                }
                if (rec.lunghezza == 0) {
                    lunghezza = "Corta";
                }
                else {
                    lunghezza = "Lunga";
                }
                var key = sesso + "_" + lunghezza + "_" + rec.categoria + "_" + rec.gara;
                recSocTemp.records[key] = rec;
                _this.updateRecordSocietari(recSocTemp);
            }
        });
    };
    AboutPage.prototype.createBaseRecordSocietari = function () {
        var _this = this;
        var recSocTemp = new recordSocietari_1.RecordSocietari();
        this.http.get('https://poseidon-8bcf8.firebaseio.com/recordSocietari/recordSocietari.json').subscribe(function (response) {
            recSocTemp = JSON.parse(JSON.stringify(response));
            if (recSocTemp == null) {
            }
            else {
                var rec = records_1.Records.createRecordProva();
                rec.tempo = "0";
                /*let sesso;
                let lunghezza;
                if (rec.sesso == 0) { sesso = "Maschi"; } else { sesso = "Femmine"; }
                if (rec.lunghezza == 0) { lunghezza = "Corta"; } else { lunghezza = "Lunga"; }
                */
                //let key = sesso+"_"+lunghezza+"_"+rec.categoria+"_"+rec.gara;
                var keys = records_1.Records.createBaseRecordSocietari();
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    //if(k.substring(0))
                    recSocTemp.records[k] = rec;
                }
                _this.updateRecordSocietari(recSocTemp);
            }
        });
    };
    AboutPage.prototype.caricaAll = function () {
        var _this = this;
        var temp = [];
        var tempKey = [];
        this.http.get('https://poseidon-8bcf8.firebaseio.com/recordSocietari/recordSocietari/records/.json').subscribe(function (response) {
            temp = JSON.parse(JSON.stringify(response));
            //console.log("debug: "+temp[0].categoria);
            Object.keys(temp).forEach(function (key) {
                tempKey[tempKey.length] = key;
            });
            if (temp == null) {
                console.log('Step null');
            }
            else {
                _this.recordSocietari.records = temp;
                _this.recKey = tempKey;
            }
            console.log(_this.recKey.length);
        });
    };
    AboutPage = __decorate([
        core_1.Component({
            selector: 'app-about',
            templateUrl: 'about.page.html',
            styleUrls: ['about.page.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, database_1.AngularFireDatabase])
    ], AboutPage);
    return AboutPage;
}());
exports.AboutPage = AboutPage;
//# sourceMappingURL=about.page.js.map