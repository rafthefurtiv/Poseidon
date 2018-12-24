import { Component } from '@angular/core';

import { Risultati, Pdf } from './pdf';


import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';


@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {


  constructor(public http: HttpClient, public db: AngularFireDatabase){
    this.caricaAll();
  }

  res = new  Risultati();



  caricaAll(){
    this.http.get('https://poseidon-8bcf8.firebaseio.com/risultati.json').subscribe(
    response => {
      this.res = JSON.parse(JSON.stringify(response));
        }
    );
  }



  open(url: string){
    
    window.open(url,'_system', 'location=yes');
  }



}
