import { Component, Input } from '@angular/core';
import { Transaction } from '../transactions.model';

@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.scss']
})
export class RecentTransactionComponent {
  @Input() transaction: Transaction;
}
