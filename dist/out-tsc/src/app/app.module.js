"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var angularfire2_1 = require("angularfire2");
var database_1 = require("angularfire2/database");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/common/http");
var environment_1 = require("../environment");
var auth_1 = require("angularfire2/auth");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            entryComponents: [],
            imports: [
                http_2.HttpClientModule,
                auth_1.AngularFireAuthModule,
                angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                database_1.AngularFireDatabaseModule,
                platform_browser_1.BrowserModule, angular_1.IonicModule.forRoot(), app_routing_module_1.AppRoutingModule
            ],
            providers: [
                http_1.HttpClient,
                ngx_2.StatusBar,
                ngx_1.SplashScreen,
                auth_1.AngularFireAuthModule,
                // NavController,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map