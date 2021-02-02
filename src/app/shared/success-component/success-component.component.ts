import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-component',
  templateUrl: './success-component.component.html',
  styleUrls: ['./success-component.component.scss']
})
export class SuccessComponentComponent implements OnInit {
  @Input() data;
  timeleft: number = 5;
  account = null
  amount = null
  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation().extras.state)
    this.account = this.router.getCurrentNavigation().extras.state.transaction.merchant
    this.amount = this.router.getCurrentNavigation().extras.state.transaction.amount
   }

  ngOnInit(): void {
    this.countdownTimer()
  }

  countdownTimer() {
    let timer = setInterval(() => {
      this.timeleft--;
      if (this.timeleft <= 0) {
        clearInterval(timer)
        this.router.navigate(['main'])
      }
    }, 1000)
  }

}
