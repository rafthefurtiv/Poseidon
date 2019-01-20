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
//import { NavController } from '@ionic/angular';
var scheda_provider_service_1 = require("../scheda-provider.service");
var atleta_component_1 = require("../atleta/atleta.component");
var platform_browser_1 = require("@angular/platform-browser");
var SchedaPage = /** @class */ (function () {
    function SchedaPage(//public navCtrl: NavController,
    schedaService, sanitizer) {
        this.schedaService = schedaService;
        this.sanitizer = sanitizer;
    }
    SchedaPage.prototype.ngOnInit = function () {
        this.urlImage = this.sanitizer.bypassSecurityTrustResourceUrl(this.schedaService.atleta.pathImage);
        this.urlImage = "url(\'" + this.schedaService.atleta.pathImage + "\')";
        console.log(this.urlImage);
        this.atleta = this.schedaService.atleta;
        this.categoria = atleta_component_1.AtletaComponent.getCategoria(this.atleta);
        //this.anno = (new Date()).getFullYear();
    };
    SchedaPage.prototype.setMyStyles = function () {
        var styles = {
            'background-image': "url('assets/sfondo2.png'), url('assets/sfondo1.png')",
            'padding': '0%',
            'margin': '0%',
            'background-position': 'center',
            'background-size': 'contain',
            'height': '100%'
        };
        return styles;
    };
    SchedaPage.prototype.setStyleAtleta = function () {
        var styles = {
            'background-image': this.urlImage,
            'padding': '0%',
            'margin': '0%',
            'background-repeat': 'no-repeat',
            'background-position': 'right bottom',
            'background-size': '70%',
            'height': '100%'
        };
        return styles;
    };
    SchedaPage.prototype.setMyStylesSuperiore = function () {
        var styles = {
            'margin': '0%',
            'padding': '1% 1% 6% 1%',
            'background-image': 'url("assets/superiore.png")',
            'background-size': '100% 100%'
        };
        return styles;
    };
    SchedaPage.prototype.setMyStylesInferiore = function () {
        var styles = {
            'margin': '0%',
            'padding': '6% 1% 3% 2%',
            'background-image': 'url("assets/inferiore.png")',
            'background-size': '100% 100%',
            'position': 'absolute',
            'width': '100%',
            'bottom': '0px'
        };
        return styles;
    };
    SchedaPage.prototype.setMyStylesLaterale = function () {
        var styles = {
            'margin': '0%',
            'background-image': 'url("assets/laterale.png")',
            'background-repeat': 'no-repeat',
            'background-size': '100% 100%',
            'width': 'fit-content',
            'max-width': '100%'
        };
        return styles;
    };
    SchedaPage.prototype.setMyStylesContent = function () {
        var styles = {
            'margin': '0%',
            'padding': '0%',
            'background-image': 'url("assets/scorrimento.png")',
            'background-size': '100% 100%',
            'background-position': 'center',
            //'background-size': 'contain',
            'height': '100%'
        };
        return styles;
    };
    SchedaPage = __decorate([
        core_1.Component({
            selector: 'app-scheda',
            templateUrl: './scheda.page.html',
            styleUrls: ['./scheda.page.scss'],
        }),
        __metadata("design:paramtypes", [scheda_provider_service_1.SchedaProviderService,
            platform_browser_1.DomSanitizer])
    ], SchedaPage);
    return SchedaPage;
}());
exports.SchedaPage = SchedaPage;
//# sourceMappingURL=scheda.page.js.map