import { Component, ViewChild } from '@angular/core';

import { MakeTransferGroup } from './make-transfer.group';
import { FormGroup } from '@angular/forms';
import { ModalConfig } from 'src/app/shared/components/modal-confirm/modal-confirm.config';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent {
  @ViewChild('modal') private modalComponent: ModalConfirmComponent;
  transactionTBC;
  makeTransactionForm: FormGroup;
  modalConfig: ModalConfig = {
    modalTitle: 'Confirm Transaction',
    closeButtonLabel: 'Reject',
    submitButtonLabel: 'Confirm',
    onSubmit: () => {
      this.makeTransferGroup.onAddTransactionGroup()
      return true
    }
  }

  constructor(private makeTransferGroup: MakeTransferGroup) {
    this.makeTransactionForm = this.makeTransferGroup.makeTransactionForm;
  }

  onAddTransaction(): void {
    this.transactionTBC = this.makeTransferGroup.getUserInput();

    this.modalComponent.open()
  }
}