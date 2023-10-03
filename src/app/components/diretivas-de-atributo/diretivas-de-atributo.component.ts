import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-de-atributo',
  templateUrl: './diretivas-de-atributo.component.html',
  styleUrls: ['./diretivas-de-atributo.component.scss']
})
export class DiretivasDeAtributoComponent {
  active = false;
  handleActive(){
    this.active = !this.active;
  }
}
