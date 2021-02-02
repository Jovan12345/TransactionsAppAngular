import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../recent-transactions/transactions.model';
import { TransactionsService } from '../recent-transactions/transactions.service';

import {newImageBase64} from '../../../assets/newImageBase64';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent implements OnInit {
  makeTransactionForm = new FormGroup({
    accountFromName: new FormControl({value: '', disabled: true}),
    accountToName: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    amount: new FormControl(null, [Validators.required])
  })

  imageUrl = newImageBase64;

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {
  }

  onAddTransaction(){
    let newTransaction = new Transaction(
      this.makeTransactionForm.value.amount.toFixed(2),
      '#12a580',
      this.makeTransactionForm.value.accountToName,
      newImageBase64,
      Date.now(),
      'Online Transactions'
    );

    this.transactionsService.onTransactionAdd(newTransaction)
    this.makeTransactionForm.reset()
  }

}
