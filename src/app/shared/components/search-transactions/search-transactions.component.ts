import { Component, OnDestroy } from '@angular/core';
import { TransactionsService } from '../../../main/recent-transactions/transactions.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-transactions',
  templateUrl: './search-transactions.component.html',
  styleUrls: ['./search-transactions.component.scss'],
})
export class SearchTransactionsComponent implements OnDestroy {
  userInput: string;
  searchValue = new Subject<string>();

  constructor(private transactionsService: TransactionsService, private router: Router) {
    this.searchValue
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(
        (value: string) => this.transactionsService.onTransactionSearch(value),
        () => this.router.navigate(['shared/error'])
      )
  }

  ngOnDestroy() {
    this.searchValue.unsubscribe();
  }
}
