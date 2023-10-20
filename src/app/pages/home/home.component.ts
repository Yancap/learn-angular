import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'learn-angular';
  texto = "Texto passado como variável";
  outroValor = 0;
  mudarValor = () => {this.outroValor++}
}
