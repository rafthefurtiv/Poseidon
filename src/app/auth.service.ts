import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: firebase.User;

  public mail = "";

  constructor(
    public http: HttpClient,
    public afAuth: AngularFireAuth
  ) {

    afAuth.authState.subscribe(user => {
      this.user = user;
      this.mail = user.email;
    });

   }


   signInWithEmail(credentials){
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
      credentials.password);
  }


  signOut(){
    return this.afAuth.auth.signOut();
  }

  getUserMail(){
		return this.afAuth.auth.currentUser.email;
  }

  getUserMailSaved(){
		return this.user.email;
  }

}
