import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { Transaction } from '../transactions.model';


@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.scss']
})
export class RecentTransactionComponent implements OnInit{
  @Input() transaction: Transaction;
  localeCurrency: string;

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }


  ngOnInit() {     
    this.localeCurrency = this.localeId === 'sr' ? 'RSB' : 'USD'
  }
}
