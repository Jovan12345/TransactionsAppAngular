import { Component } from '@angular/core';

import { TransactionsService } from '../../../main/recent-transactions/transactions.service';

@Component({
  selector: 'app-sort-transactions',
  templateUrl: './sort-transactions.component.html',
  styleUrls: ['./sort-transactions.component.scss']
})
export class SortTransactionsComponent {

  constructor(private transactionsService: TransactionsService) { }

  sortTransactions(value: string){
    this.transactionsService.sortTransaction(value)
  }
}
