import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emitter-filho',
  templateUrl: './emitter-filho.component.html',
  styleUrls: ['./emitter-filho.component.scss']
})
export class EmitterFilhoComponent {
  @Output() mudarNumero: EventEmitter<any> = new EventEmitter();
  handleClick(){
    this.mudarNumero.emit()
  }
}
