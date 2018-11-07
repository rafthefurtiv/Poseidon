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
    public medaglieOro = 0;
    public medaglieArgentoStaff = 0;
    public medaglieBronzoStaff = 0;
    public medagleOrostaff = 0;

    public pathCover = 'https://firebasestorage.googleapis.com/v0/b/poseidon-8bcf8.appspot.com/o/ary.png?alt=media&token=82ece0d6-7665-4379-a1db-968e1d177ef4';
    public pathImage = 'https://firebasestorage.googleapis.com/v0/b/poseidon-8bcf8.appspot.com/o/ary_image.png?alt=media&token=a563870c-b4bd-435c-beac-7d0995cdffe3';



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
      try{this.medaglieOro = atl.medaglieOro;} catch(err){}
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



    public static getCategoria(atl: AtletaComponent){

      let date = new Date(atl.dataNascita);
      let settembre = new Date();

      if (settembre.getMonth() < 9) {
        settembre.setFullYear(settembre.getFullYear() - 1); // per conteggiare l'anno di Settembre
      }


      let anni = settembre.getFullYear() - date.getFullYear();
      anni += 1;

      if(anni >= 55){
        return "M55";
      } else if(anni >= 50){
        return "M50";
      } else if(anni >= 45){
        return "M45";
      } else if(anni >= 40){
        return "M40";
      } else if(anni >= 35){
        return "M35";
      } else if(anni >= 30){
        return "M30";
      } else if(anni >= 25){
        return "M25";
      } else if(anni >= 20){
        return "M20";
      } else {
        return "U20";
      }



    }





    /*
    
    	public static string getCategoriaString(string data){
		//this.dataNascita.Split("-", 3);
		if (data == null) {return "NC";}
		if (data.CompareTo("") == 0) {return "NC";}
		//Debug.Log ("Data: "+ data);
		System.DateTime date = System.DateTime.Parse (data);
		System.DateTime settembre = System.DateTime.Now;
		//Debug.Log ("Data: "+ date.Day + "/" + date.Month + "/" + date.Year);
		if (settembre.Month < 9) {
			settembre = settembre.AddYears (-1); // per conteggiare l'anno di Settembre
		}

		//System.TimeSpan date_scarto = settembre.Subtract (date);
		//int anni = (int) date_scarto.TotalDays / 365;

		int anni = settembre.Year - date.Year;



		anni += 1; // per la regola dell'anno solare successivo.
		//Debug.Log ("Differenza: " + anni);

		if(anni >= 55){
			return "M55";
		} else if(anni >= 50){
			return "M50";
		} else if(anni >= 45){
			return "M45";
		} else if(anni >= 40){
			return "M40";
		} else if(anni >= 35){
			return "M35";
		} else if(anni >= 30){
			return "M30";
		} else if(anni >= 25){
			return "M25";
		} else if(anni >= 20){
			return "M20";
		} else {
			return "U20";
		}
	//	Debug.Log ("data scarto: " + (date_scarto.TotalDays/365).ToString());

	}
    
    */



}
