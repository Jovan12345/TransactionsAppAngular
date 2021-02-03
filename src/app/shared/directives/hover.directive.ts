import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  constructor(private el: ElementRef) {}

  @Input('appHover') cutomHighlitColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.hoverHighlight(this.cutomHighlitColor || 'lightgrey')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.hoverHighlight('')
  }

  private hoverHighlight(color: string){
    this.el.nativeElement.style.backgroundColor = color
  }
}
