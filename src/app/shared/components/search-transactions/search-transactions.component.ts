import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { TransactionsService } from '../../../main/recent-transactions/transactions.service';

import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-search-transactions',
  templateUrl: './search-transactions.component.html',
  styleUrls: ['./search-transactions.component.scss'],
})
export class SearchTransactionsComponent implements OnDestroy {
  userInput: string = null;
  searchValue = new Subject<string>();
  faTimesCircle = faTimesCircle;

  constructor(private transactionsService: TransactionsService, private router: Router) {
    // delay 0.4 seconds before filtering the array against the search input value
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

  clearText(){
    this.userInput = null
    this.transactionsService.onTransactionSearch('')
  }

  ngOnDestroy() {
    this.searchValue.unsubscribe();
  }
}
