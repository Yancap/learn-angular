import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {
  @ViewChild("meuInput") elementoinput!: ElementRef<HTMLInputElement>; 
  teste!: number;
  public verReferencia(){
    console.log(this.elementoinput.nativeElement);
    console.log(this.teste);
    
    
  }
}
