import { Component, Input } from '@angular/core';

interface Dados {
  email: string;
  nome: string;
}

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss'],
  inputs: ["outro"]
})
export class FilhoComponent {
  @Input() public titulo!: string;
  @Input() public texto!: string;
  @Input() public dados!: Dados;
  public outro!: string;
}
