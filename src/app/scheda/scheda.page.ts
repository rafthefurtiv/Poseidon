import { Component, OnInit } from '@angular/core';
//import { NavController } from '@ionic/angular';
import { SchedaProviderService } from '../scheda-provider.service';
import { AtletaComponent } from '../atleta/atleta.component';

@Component({
  selector: 'app-scheda',
  templateUrl: './scheda.page.html',
  styleUrls: ['./scheda.page.scss'],
})
export class SchedaPage implements OnInit {

  atleta: AtletaComponent;

  constructor(//public navCtrl: NavController,
    public schedaService: SchedaProviderService
     ) {




      }

  ngOnInit() {
    this.atleta = this.schedaService.atleta;
    console.log("Debug: " + this.atleta.userName);
  }

}
