import {GaraComponent} from './gara.component';


export class AtletaComponent {

  constructor(){}

    public userName = '';
    public soprannome = '';
    public gare = [];
    public aloneDorato = false;
    public annoIscrizione = 0;
    public dataNascita = 'dsadasd';
    public gareSvolte = 0;
    public descrizione = '';
    public nome = '';
    public cognome = '';
    public punteggio = 0;
    public sesso = 0; // 0-Maschio, 1-Femmina
    public specialita = '';
    public squalifiche = 0;
    public medaglieArgento = 0;
    public medaglieBronzo = 0;
    public medagleOro = 0;
    public medaglieArgentoStaff = 0;
    public medaglieBronzoStaff = 0;
    public medagleOrostaff = 0;



    toString(){
      // Completare;
      return 'Username: '+this.userName + ' Soprannome: ' + this.soprannome + ' Gare: ' + this.gare.length;
    }




    // Non usare per ora
    public formalizza(atl: AtletaComponent){

      try{this.userName = atl.userName;} catch(err){}
      try{this.soprannome = atl.soprannome;} catch(err){}
      try{this.gare = atl.gare;} catch(err){}
      try{this.aloneDorato = atl.aloneDorato;} catch(err){console.error("Errore: "+err);}
      try{this.annoIscrizione = atl.annoIscrizione;} catch(err){}
      try{this.dataNascita = atl.dataNascita;} catch(err){}
      try{this.gareSvolte = atl.gareSvolte;} catch(err){}
      try{this.descrizione = atl.descrizione;} catch(err){}
      try{this.nome = atl.nome;} catch(err){}
      try{this.cognome = atl.cognome;} catch(err){}
      try{this.punteggio = atl.punteggio;} catch(err){}
      try{this.sesso = atl.sesso;} catch(err){}
      try{this.specialita = atl.specialita;} catch(err){}
      try{this.squalifiche = atl.squalifiche;} catch(err){}
      try{this.medaglieArgento = atl.medaglieArgento;} catch(err){}
      try{this.medaglieBronzo = atl.medaglieBronzo;} catch(err){}
      try{this.medagleOro = atl.medagleOro;} catch(err){}
      try{this.medaglieArgentoStaff = atl.medaglieArgentoStaff;} catch(err){}
      try{this.medaglieBronzoStaff = atl.medaglieBronzoStaff;} catch(err){}
      try{this.medagleOrostaff = atl.medagleOrostaff;} catch(err){}
      //this. = atl.;

    }


    static makeAtletaProva(){
      var gara1 = new GaraComponent();
      gara1.categoria = 'M20';
      gara1.nomeGara = '50SL';
      gara1.tempo = 31.01;
  
      var gara2 = new GaraComponent();
      gara2.categoria = 'M35';
      gara2.nomeGara = '100SL';
      gara2.tempo = 67.59;
  
      var atl1 = new AtletaComponent();
      atl1.userName = 'UtProva';
      atl1.soprannome = 'Sopr';
      atl1.gare[atl1.gare.length] = gara1;
      atl1.gare[atl1.gare.length] = gara2;

      return atl1;
    }



}
