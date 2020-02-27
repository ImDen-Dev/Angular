import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color = 'blue';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(elRef.nativeElement, 'color', 'blue');
    // elRef.nativeElement.style.color = 'red';
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color);
  }
  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', null);
  }
}
