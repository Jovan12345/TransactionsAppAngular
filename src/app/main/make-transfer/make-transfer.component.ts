import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../recent-transactions/transactions.model';
import { TransactionsService } from '../recent-transactions/transactions.service';

import {newImageBase64} from '../../../assets/newImageBase64';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent implements OnInit {
  makeTransactionForm = new FormGroup({
    accountFromName: new FormControl('Free Checking - $50000'),
    accountToName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    amount: new FormControl(null, [Validators.required])
  })

  imageUrl = newImageBase64;

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {
  }

  onAddTransaction(){
    let newTransaction = new Transaction(
      this.makeTransactionForm.value.amount,
      '#12a580',
      this.makeTransactionForm.value.accountToName,
      newImageBase64,
      Date.now(),
      'Online Transactions'
    );

    this.transactionsService.onTransactionAdd(newTransaction)
  }

}
