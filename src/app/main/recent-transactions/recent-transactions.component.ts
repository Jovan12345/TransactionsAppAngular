import { Component, OnInit } from '@angular/core';
import { Transaction } from './transactions.model';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.scss']
})
export class RecentTransactionsComponent implements OnInit {
  transactions: Transaction[];

  constructor(private transactionsService: TransactionsService) {
    transactionsService.transactionsChanged.subscribe(data => {
      this.transactions = data
    })
  }

  ngOnInit(): void {
    this.transactions = this.transactionsService.getTransactions()
  }
}
