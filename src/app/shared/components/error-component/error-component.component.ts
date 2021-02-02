import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.scss']
})
export class ErrorComponentComponent implements OnInit {
  @Input() message;
  constructor() { }

  ngOnInit(): void {
  }

}
