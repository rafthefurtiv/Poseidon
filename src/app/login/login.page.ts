import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';

import { HomePage } from '../home/home.page';

import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginPage }])
  ],
  declarations: [LoginPage]
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  loginError;
  credentials: any = {email:"", password:""};

  constructor(
    //public fb: FormBuilder,
    private auth: AuthService,
    public navCtrl: NavController,
    private storage: Storage
  ) {

    var tempUser = ""
    storage.get('email').then((val) => {
      tempUser = val;
      this.credentials.email = val;
      console.log("sTORAGE USERNAME: " + val);
    });

    storage.get('password').then((val) => {
      this.credentials.password = val;
      console.log("Storage Password: " + val);
    });

    this.loginErrorReset();


    

    /*
		this.loginForm = this.fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});

*/
   }

  ngOnInit() {
  }



  logIn(){
    this.loginErrorReset();

		this.auth.signInWithEmail(this.credentials)
			.then(
				() => {
          // Save credentials
          this.storage.set('email', this.credentials.email);
          this.storage.set('password', this.credentials.password);

          this.navCtrl.navigateForward('/tabs/(home:home)');
          //this.navCtrl.setRoot(HomePage);
        },
				error => {
          if(error.message.includes('network error')){
            this.loginError.emailError = "Errore di connessione.";
          }
          else if(error.message.includes('badly formatted')){
            this.loginError.emailError = "Email non valida";
          }
          else if(error.message.includes('no user record')){
            this.loginError.emailError = "Utente inesistente";
          }
          else if(error.message.includes('password is invalid')){
            this.loginError.passwordError = "Password errata";
          }
             
          console.log("User " + this.credentials.email + " Error LogIn: " + error.message);}
			);

  
  }






  loginErrorReset(){
     this.loginError = {
      "emailError" : "",
      "passwordError" : ""
    };

   }





}
