import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TransactionsService } from '../../../main/recent-transactions/transactions.service';

@Component({
  selector: 'app-search-transactions',
  templateUrl: './search-transactions.component.html',
  styleUrls: ['./search-transactions.component.scss'],
})
export class SearchTransactionsComponent implements OnInit {
  searchValue = new FormControl(null)

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {
  }

  onSearchTransactions(){
    this.transactionsService.onTransactionSearch(this.searchValue.value)
  }

}
