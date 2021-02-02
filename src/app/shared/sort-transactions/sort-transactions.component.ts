import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../main/recent-transactions/transactions.service';

@Component({
  selector: 'app-sort-transactions',
  templateUrl: './sort-transactions.component.html',
  styleUrls: ['./sort-transactions.component.scss']
})
export class SortTransactionsComponent implements OnInit {

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {
  }

  sortTransactions(value){
    this.transactionsService.sortTransaction(value)
  }


}
