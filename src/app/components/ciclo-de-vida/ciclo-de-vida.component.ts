import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.scss']
})
export class CicloDeVidaComponent implements OnChanges, OnInit, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log("ngOnChanges");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck"); 
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit"); 
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");  
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit"); 
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked"); 
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy"); 
  }
}
