import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {
  active = false;
  text: string = "";
  handleClick(event?: MouseEvent){
    this.active = !this.active;
  }
  handleChange(event: Event){
    this.text = (event.target as HTMLInputElement).value;
  }
}
