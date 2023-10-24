import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[diretivaPersonalizada]'
})
export class DiretivaPersonalizadaDirective {
  constructor(
    private _elementRef: ElementRef<HTMLParagraphElement>,
    private _renderer: Renderer2
  ) {
    this._renderer.setStyle(this._elementRef.nativeElement, 'background', 'yellow');
  }
  
}
