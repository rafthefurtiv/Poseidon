"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("@ionic/angular");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var tabs_router_module_1 = require("./tabs.router.module");
var tabs_page_1 = require("./tabs.page");
var contact_module_1 = require("../contact/contact.module");
var about_module_1 = require("../about/about.module");
var home_module_1 = require("../home/home.module");
var scheda_module_1 = require("../scheda/scheda.module");
var login_page_1 = require("../login/login.page");
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        core_1.NgModule({
            imports: [
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                tabs_router_module_1.TabsPageRoutingModule,
                home_module_1.HomePageModule,
                about_module_1.AboutPageModule,
                contact_module_1.ContactPageModule,
                scheda_module_1.SchedaPageModule,
                login_page_1.LoginPage
            ],
            declarations: [tabs_page_1.TabsPage]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());
exports.TabsPageModule = TabsPageModule;
//# sourceMappingURL=tabs.module.js.map