import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent {
  numero: number = 0;
  onMudarNumero(){
    this.numero = Math.floor(Math.random() * 10)
  }
}
