import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLeftBorderColor]'
})
export class LeftBorderColorDirective implements OnInit {
  @Input('appLeftBorderColor') appLeftBorderColor: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.borderLeft = '7px solid ' + this.appLeftBorderColor
  }
}
