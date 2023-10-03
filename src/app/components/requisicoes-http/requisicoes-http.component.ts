import { Component } from '@angular/core';
import { RequisicoesHttpService } from './requisicoes-http.service';

@Component({
  selector: 'app-requisicoes-http',
  templateUrl: './requisicoes-http.component.html',
  styleUrls: ['./requisicoes-http.component.scss']
})
export class RequisicoesHttpComponent {
  public response: any[] = []

  constructor(private requisicoesHttpService: RequisicoesHttpService) {
    this.getDataFromAPI();
  }

  async getDataFromAPI(){
    this.requisicoesHttpService.getAll().subscribe(data => this.response = data)
  }
}
