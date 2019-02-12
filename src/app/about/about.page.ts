import { Component } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';

import { RecordSocietari } from './recordSocietari';
import { Records } from './records';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  constructor(public http: HttpClient, public db: AngularFireDatabase, public authService: AuthService){

        // non funziona bene, da verificare.
        if (authService != null && authService != undefined) {
          if (authService.mail == "rafthefurtiv@gmail.com" || authService.mail == "gaetano-cerullo@libero.it") {
            this.admin = true;
          }
        }
        
    this.caricaAll();

    // Utilizzare solo la prima volta per l'inizializzazione.
    //this.createBaseRecordSocietari();

  }
  admin = false;
  recordSocietari = new RecordSocietari();
  recKey = [];

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
        let rec = Records.createRecordProva();
        let sesso;
        let lunghezza;
        if(rec.sesso == 0){sesso = "Maschi";} else {sesso = "Femmine";}
        if(rec.lunghezza == 0){lunghezza = "Corta";} else {lunghezza = "Lunga";}
        let key = sesso+"_"+lunghezza+"_"+rec.categoria+"_"+rec.gara;
        recSocTemp.records[key] = rec;
        this.updateRecordSocietari(recSocTemp);
         }
        }
    );

  }





  createBaseRecordSocietari() {

    var recSocTemp = new RecordSocietari();

    this.http.get('https://poseidon-8bcf8.firebaseio.com/recordSocietari/recordSocietari.json').subscribe(
      response => {
        recSocTemp = JSON.parse(JSON.stringify(response));

        if (recSocTemp == null) {

        }
        else {
          let rec = Records.createRecordProva();
          rec.tempo = "0";
          /*let sesso;
          let lunghezza;
          if (rec.sesso == 0) { sesso = "Maschi"; } else { sesso = "Femmine"; }
          if (rec.lunghezza == 0) { lunghezza = "Corta"; } else { lunghezza = "Lunga"; }
          */
          //let key = sesso+"_"+lunghezza+"_"+rec.categoria+"_"+rec.gara;
          let keys = Records.createBaseRecordSocietari();
          for (let k of keys) {
            //if(k.substring(0))
            recSocTemp.records[k] = rec;
          }

          this.updateRecordSocietari(recSocTemp);
        }
      }
    );

  }





  caricaAll(){

    var temp = [];

    var tempKey = [];

    this.http.get('https://poseidon-8bcf8.firebaseio.com/recordSocietari/recordSocietari/records/.json').subscribe(
    response => {
      temp = JSON.parse(JSON.stringify(response));

      //console.log("debug: "+temp[0].categoria);

      Object.keys(temp).forEach(key => {
        tempKey[tempKey.length] = key;
        });

        if(temp == null){
          console.log('Step null');
        }
        else{
          this.recordSocietari.records = temp;
          this.recKey = tempKey;
         }


         console.log(this.recKey.length);

        }
    );

  }







}
