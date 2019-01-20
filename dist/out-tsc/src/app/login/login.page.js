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
var angular_1 = require("@ionic/angular");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../auth.service");
var core_2 = require("@angular/core");
var angular_2 = require("@ionic/angular");
var LoginPage = /** @class */ (function () {
    function LoginPage(
    //public fb: FormBuilder,
    auth, navCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.credentials = { email: "", password: "" };
        this.loginErrorReset();
        /*
            this.loginForm = this.fb.group({
                email: ['', Validators.compose([Validators.required, Validators.email])],
                password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
            });
    
    */
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.logIn = function () {
        var _this = this;
        this.loginErrorReset();
        console.log(this.credentials);
        this.auth.signInWithEmail(this.credentials)
            .then(function () {
            _this.navCtrl.navigateForward('/tabs/(home:home)');
            //this.navCtrl.setRoot(HomePage);
        }, function (error) {
            if (error.message.includes('network error')) {
                _this.loginError.emailError = "Errore di connessione.";
            }
            else if (error.message.includes('badly formatted')) {
                _this.loginError.emailError = "Email non valida";
            }
            else if (error.message.includes('no user record')) {
                _this.loginError.emailError = "Utente inesistente";
            }
            else if (error.message.includes('password is invalid')) {
                _this.loginError.passwordError = "Password errata";
            }
            console.log("User " + _this.credentials.email + " Error LogIn: " + error.message);
        });
    };
    LoginPage.prototype.loginErrorReset = function () {
        this.loginError = {
            "emailError": "",
            "passwordError": ""
        };
    };
    var LoginPage_1;
    LoginPage = LoginPage_1 = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        core_2.NgModule({
            imports: [
                angular_1.IonicModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild([{ path: '', component: LoginPage_1 }])
            ],
            declarations: [LoginPage_1]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            angular_2.NavController])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.page.js.map