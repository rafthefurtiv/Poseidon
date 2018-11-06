import { Component } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';

import { RecordSocietari } from './recordSocietari';
import { Records } from './records';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  constructor(public http: HttpClient, public db: AngularFireDatabase){

    this.caricaAll();

  }

  recordSocietari = new RecordSocietari();
  cat = 'U20';
  ses = 0;
  lun = 0;


  insert(){


    var recSoc = new RecordSocietari();

    recSoc.records[0] = new Records();

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
  }



  updateRecordSocietari(recSocTemp: RecordSocietari){
    var savedAtl = this.db.list('recordSocietari');
    savedAtl.set('recordSocietari', recSocTemp);
  }


  addRecord(){

    var recSocTemp = new RecordSocietari();

    this.http.get('https://poseidon-8bcf8.firebaseio.com/recordSocietari/recordSocietari.json').subscribe(
    response => {
      recSocTemp = JSON.parse(JSON.stringify(response));

        if(recSocTemp == null){

        }
        else{
        recSocTemp.records[recSocTemp.records.length] = Records.createRecordProva();
        this.updateRecordSocietari(recSocTemp);
         }
        }
    );

  }






  caricaAll(){
    this.http.get('https://poseidon-8bcf8.firebaseio.com/recordSocietari/recordSocietari.json').subscribe(
    response => {
      this.recordSocietari = JSON.parse(JSON.stringify(response));
        }
    );

  }







}
