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
var atleta_component_1 = require("../atleta/atleta.component");
var gara_component_1 = require("../atleta/gara.component");
var http_1 = require("@angular/common/http");
//import { Observable } from 'rxjs';
var angular_1 = require("@ionic/angular");
var scheda_provider_service_1 = require("../scheda-provider.service");
var HomePage = /** @class */ (function () {
    function HomePage(db, http, navCtrl, schedaService) {
        this.db = db;
        this.http = http;
        this.navCtrl = navCtrl;
        this.schedaService = schedaService;
        this.admin = true;
        this.atleta = new atleta_component_1.AtletaComponent();
        this.atleti = [];
        this.atlKey = [];
        this.message = '';
        this.nomeUtente = "";
        this.ricerca = "";
        this.caricaAll();
    }
    HomePage.prototype.insert = function () {
        var atl1 = atleta_component_1.AtletaComponent.makeAtletaProva();
        var savedAtl = this.db.list('atleti');
        atl1.userName = atl1.userName + Math.floor(Math.random() * 20) + 1;
        atl1.userName = this.nomeUtente;
        savedAtl.set(atl1.userName, atl1);
    };
    // GENERICHE PER PROVIDER ---------------------------------------------
    HomePage.prototype.updateAtleta = function (atl) {
        var savedAtl = this.db.list('atleti');
        var del = savedAtl.remove(atl.userName);
        del.then(function (data) {
            //setTimeout(10000);
            savedAtl.set(atl.userName, atl);
        });
        //savedAtl.set(atl.userName, atl);
    };
    HomePage.prototype.getUtenteJson = function (username) {
        return this.http.get('https://poseidon-8bcf8.firebaseio.com/atleti/' + username + '.json');
    };
    HomePage.prototype.getUtente = function (username) {
        /*var savedAtl = new Observable<AtletaComponent>();
        this.http.get('https://poseidon-8bcf8.firebaseio.com/atleti/'+ username +'.json').subscribe(
          response => {
            savedAtl = JSON.parse(JSON.stringify(response));
              }
          );
          return savedAtl;
          */
    };
    // --------------------------------------------------------------------
    HomePage.prototype.addGara = function () {
        var _this = this;
        var savedAtl = new atleta_component_1.AtletaComponent();
        //var tempAtl = new AtletaComponent();
        this.http.get('https://poseidon-8bcf8.firebaseio.com/atleti/' + this.nomeUtente + '.json').subscribe(function (response) {
            savedAtl = JSON.parse(JSON.stringify(response));
            if (savedAtl == null) {
            }
            else {
                //savedAtl.formalizza(tempAtl);
                savedAtl.gare[savedAtl.gare.length] = gara_component_1.GaraComponent.garaProva();
                _this.updateAtleta(savedAtl);
            }
        });
    };
    HomePage.prototype.carica = function (username) {
        var _this = this;
        var savedAtl = new atleta_component_1.AtletaComponent();
        this.http.get('https://poseidon-8bcf8.firebaseio.com/atleti/' + username + '.json').subscribe(function (response) {
            savedAtl = JSON.parse(JSON.stringify(response));
            if (savedAtl == null) {
                console.log('Step null');
            }
            else {
                _this.atleta = savedAtl;
            }
        });
    };
    HomePage.prototype.caricaAll = function () {
        var _this = this;
        var tempAtleti = [];
        this.http.get('https://poseidon-8bcf8.firebaseio.com/atleti/.json').subscribe(function (response) {
            tempAtleti = JSON.parse(JSON.stringify(response));
            Object.keys(tempAtleti).forEach(function (key) {
                tempAtleti[key];
            });
            if (tempAtleti == null) {
                console.log('Step null');
            }
            else {
                _this.atleti = tempAtleti;
                _this.atlKey = Object.keys(_this.atleti);
            }
        });
    };
    HomePage.prototype.ricercaUtente = function (key) {
        if (this.atleti[key].pathCover == null) {
            return false;
        }
        var sop = this.atleti[key].soprannome.toLowerCase();
        var ric = this.ricerca.toLowerCase();
        var nomeCognome = this.atleti[key].nome.toLowerCase() + this.atleti[key].cognome.toLowerCase();
        if (sop.includes(ric)) {
            return true;
        }
        else if (nomeCognome.includes(ric)) {
            return true;
        }
        else
            return false;
        //return true;
    };
    HomePage.prototype.toScheda = function (atl) {
        this.schedaService.atleta = this.atleti[atl];
        this.navCtrl.navigateForward('scheda');
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        }),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase,
            http_1.HttpClient,
            angular_1.NavController,
            scheda_provider_service_1.SchedaProviderService])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.page.js.map