import { Component } from '@angular/core';

import { MakeTransferGroup } from './make-transfer.group';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent {
  makeTransactionForm: FormGroup;

  constructor(private makeTransferGroup: MakeTransferGroup) {
    this.makeTransactionForm = this.makeTransferGroup.makeTransactionForm;
  }

  onAddTransaction(): void {
    this.makeTransferGroup.onAddTransactionGroup()
  }
}
