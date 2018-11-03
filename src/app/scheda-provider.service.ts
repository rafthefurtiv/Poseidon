import { Injectable } from '@angular/core';
import { AtletaComponent } from './atleta/atleta.component';

@Injectable({
  providedIn: 'root'
})
export class SchedaProviderService {

  atleta: AtletaComponent;

  constructor() { }
}
