import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[diretivaEvento]'
})
export class DiretivaEventoDirective {
  
  constructor() { }
  @Input() diretivaEventoColor!: string;
  @Input("diretivaEvento") color!: string;

  @HostBinding('style.backgroundColor') get setBgColors() {
    return this.backgroundColor;
  }

  private backgroundColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.color !== "" ? this.color : "red";
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = "transparent";
  }
  
}
