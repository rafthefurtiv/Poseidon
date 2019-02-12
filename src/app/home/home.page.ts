import { Component } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';

import {AtletaComponent} from '../atleta/atleta.component';
import {GaraComponent} from '../atleta/gara.component';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
//import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { SchedaPage } from '../scheda/scheda.page';

import { SchedaProviderService } from '../scheda-provider.service';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  admin = false;

  atleta = new AtletaComponent();

  atleti = [];

  atlKey = [];

  message = '';

  nomeUtente = "";
  ricerca = "";


  constructor(public db: AngularFireDatabase, 
    public http: HttpClient,
    public navCtrl: NavController,
    public schedaService: SchedaProviderService,
    public authService: AuthService
  ){
    
    // non funziona bene, da verificare.
    if (authService != null && authService != undefined) {
      if (authService.mail == "rafthefurtiv@gmail.com" || authService.mail == "gaetano-cerullo@libero.it") {
        this.admin = true;
      }
    }
    
    //console.log("Log in by: " + authService.getUserMail());
    this.caricaAll();

  }


  insert(){
    var atl1 = AtletaComponent.makeAtletaProva();

    var savedAtl = this.db.list('atleti');

    atl1.userName = atl1.userName + Math.floor(Math.random()*20)+1;

    atl1.userName = this.nomeUtente;

    savedAtl.set(atl1.userName, atl1);
  }


// GENERICHE PER PROVIDER ---------------------------------------------
  updateAtleta(atl: AtletaComponent){
    var savedAtl = this.db.list('atleti');
    var del = savedAtl.remove(atl.userName); 

    del.then(
      data => {
        //setTimeout(10000);
        savedAtl.set(atl.userName, atl);}
      
    );
    //savedAtl.set(atl.userName, atl);
  }

  getUtenteJson(username: string){
      return  this.http.get('https://poseidon-8bcf8.firebaseio.com/atleti/'+username+'.json');
  }


  getUtente(username: string){
    /*var savedAtl = new Observable<AtletaComponent>();
    this.http.get('https://poseidon-8bcf8.firebaseio.com/atleti/'+ username +'.json').subscribe(
      response => {
        savedAtl = JSON.parse(JSON.stringify(response));
          }
      );
      return savedAtl;
      */
  }
// --------------------------------------------------------------------


  addGara(){
    var savedAtl = new AtletaComponent();
    //var tempAtl = new AtletaComponent();
    this.http.get('https://poseidon-8bcf8.firebaseio.com/atleti/'+this.nomeUtente+'.json').subscribe(
    response => {
      savedAtl = JSON.parse(JSON.stringify(response));

        if(savedAtl == null){

        }
        else{
        //savedAtl.formalizza(tempAtl);
        savedAtl.gare[savedAtl.gare.length] = GaraComponent.garaProva();
        this.updateAtleta(savedAtl);
         }
        }
    );
  }






  carica(username: string){
    var savedAtl = new AtletaComponent();

    this.http.get('https://poseidon-8bcf8.firebaseio.com/atleti/'+username+'.json').subscribe(
    response => {
      savedAtl = JSON.parse(JSON.stringify(response));
        if(savedAtl == null){
          console.log('Step null');
        }
        else{
          this.atleta = savedAtl;
         }
        }
    );

  }




  caricaAll(){
    var tempAtleti = [];

    this.http.get('https://poseidon-8bcf8.firebaseio.com/atleti/.json').subscribe(
    response => {
      tempAtleti = JSON.parse(JSON.stringify(response));

      Object.keys(tempAtleti).forEach(key => {
        tempAtleti[key];
        });

        if(tempAtleti == null){
          console.log('Step null');
        }
        else{
          this.atleti = tempAtleti;
          this.atlKey = Object.keys(this.atleti);
         }
        }
    );

  }



  public ricercaUtente(key: string){

    if(this.atleti[key].pathCover == null){return false;}

    let sop = this.atleti[key].soprannome.toLowerCase();
    let ric = this.ricerca.toLowerCase();
    let nomeCognome = this.atleti[key].nome.toLowerCase() + this.atleti[key].cognome.toLowerCase();
    if (sop.includes(ric)){return true;}
    else if (nomeCognome.includes(ric)){return true;}
    
    else return false;
    //return true;
  }






  public toScheda(atl: string){
    this.schedaService.atleta = this.atleti[atl];
    console.log(this.schedaService.atleta)
    this.navCtrl.navigateForward('scheda');
    }






}
