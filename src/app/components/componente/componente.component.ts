import { Component } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss']
})
export class ComponenteComponent {
  public variavel = "Valor adicionado via Typescript";
  funcao(){
    return "Valor retornado de uma função"
  }
  public data = new Date();
  public texto = "Texto original"
  public controle = true
  modificar() {
    this.controle = !this.controle
    this.texto = this.controle ? "Texto original" : "Texto modificado"
    console.log(this.texto);
  }

  public mudando = "";
  mudar(){
    console.log(this);
    
  }
}
