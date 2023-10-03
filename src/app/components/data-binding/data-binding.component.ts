import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public texto: string = "Meu texto";
  public id: string = 'property-binding';
  public name: string = "";
  
  handleEvent(event?: Event): void { }
}
