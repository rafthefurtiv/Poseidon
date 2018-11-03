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
  }





  setMyStyles(){
    console.log("Debug style");

    let styles = {
      'background-image': this.urlImage + ", url('assets/sfondo1.png'), url('assets/sfondo2.png')",

      'padding': '0%',
      'margin': '0%',
      'background-position': 'center',
      'background-size': 'cover',
    };
    return styles;

  }



}
