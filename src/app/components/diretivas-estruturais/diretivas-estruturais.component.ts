import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent {
  active = false;
  handleActive(){
    this.active = !this.active;
  }

  lista = ["Item 1", "Item 2", "Item 3", "Item 4"]
  objetos = [ {"name": "Yan"}, {"name": "Gabriel"}, {"name": "Ferreira"} ]
}
