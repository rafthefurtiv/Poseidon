import { Component, OnInit } from '@angular/core';
//import { NavController } from '@ionic/angular';
import { SchedaProviderService } from '../scheda-provider.service';
import { AtletaComponent } from '../atleta/atleta.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-scheda',
  templateUrl: './scheda.page.html',
  styleUrls: ['./scheda.page.scss'],
})
export class SchedaPage implements OnInit {

  atleta: AtletaComponent;

  categoria;
  anno;
  urlImage;

  constructor(//public navCtrl: NavController,
    public schedaService: SchedaProviderService,
    private sanitizer: DomSanitizer
     ) {




      }

  ngOnInit() {
    this.urlImage = this.sanitizer.bypassSecurityTrustResourceUrl(this.schedaService.atleta.pathImage);
    
    this.urlImage = "url(\'" + this.schedaService.atleta.pathImage + "\')";
    console.log(this.urlImage);

    this.atleta = this.schedaService.atleta;


    this.categoria = AtletaComponent.getCategoria(this.atleta);

    //this.anno = (new Date()).getFullYear();
  }


  setMyStyles(){

    let styles = {
      'background-image': "url('assets/sfondo2.png'), url('assets/sfondo1.png')",

      'padding': '0%',
      'margin': '0%',
      'background-position': 'center',
      'background-size': 'contain',
      'height' : '100%'
    };
    return styles;

  }


  setStyleAtleta(){

    let styles = {
      'background-image': this.urlImage,

      'padding': '0%',
      'margin': '0%',
      'background-repeat': 'no-repeat',
      'background-position': 'right bottom',
      'background-size': '70%',
      'height': '100%'

    };
    return styles;

  }




  setMyStylesSuperiore(){
    let styles = {
      'margin': '0%',
      'padding': '1% 1% 6% 1%',
      'background-image': 'url("assets/superiore.png")', 
      'background-size': '100% 100%'
    };
    return styles;
  }

  setMyStylesInferiore(){
    let styles = {
      'margin': '0%',
      'padding': '6% 1% 3% 2%',
      'background-image': 'url("assets/inferiore.png")', 
      'background-size': '100% 100%',
      'position' : 'absolute',
      'width': '100%',
      'bottom': '0px'
    };
    return styles;
  }





  setMyStylesLaterale(){

    let styles = {
      
      'margin': '0%', 
      'background-image': 'url("assets/laterale.png")', 
      'background-repeat': 'no-repeat', 
      'background-size': '100% 100%',
      'width': 'fit-content',
      'max-width': '100%'
    };
    return styles;

  }




  setMyStylesContent(){
    let styles = {
      'margin': '0%',
      'padding': '0%',
      'background-image': 'url("assets/scorrimento.png")', 
      'background-size': '100% 100%',
      'background-position': 'center',
      //'background-size': 'contain',
      'height' : '100%'
    };
    return styles;
  }



}
