import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appBackGroundColor]'
})
export class BackGroundColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    renderer.setElementStyle(el.nativeElement, 'color', 'red');
    renderer.setElementStyle(el.nativeElement, 'height', '500px');
    renderer.setElementStyle(el.nativeElement, 'width', '50%');
    renderer.setElementStyle(el.nativeElement, 'margin-left', '20%');
  }
}
