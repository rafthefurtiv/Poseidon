import { Component } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';

import {AtletaComponent} from '../atleta/atleta.component';
import {GaraComponent} from '../atleta/gara.component';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {


  constructor(public db: AngularFireDatabase, 
    public http: HttpClient
  ){}


  insert(){
 
    console.log('Nome database: ' + this.db.database.app.database.length);

    var atl1 = AtletaComponent.makeAtletaProva();

    var savedAtl = this.db.list('atleti');

    savedAtl.set(atl1.userName, atl1);
    
    console.log('Atleta: ' + atl1.toString());

   // var atleti = this.db.
    console.log('Insert di un atleta.');
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
// --------------------------------------------------------------------


  addGara(){
    var savedAtl = new AtletaComponent();
    //var tempAtl = new AtletaComponent();
    this.http.get('https://poseidon-8bcf8.firebaseio.com/atleti/UtProva.json').subscribe(
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









}
