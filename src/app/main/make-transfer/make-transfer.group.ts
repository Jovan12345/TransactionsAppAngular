import { TitleCasePipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { newImageBase64 } from '../../../assets/newImageBase64';
import { Transaction } from "../recent-transactions/transactions.model";
import { TransactionsService } from "../recent-transactions/transactions.service";


@Injectable({ providedIn: 'root' })
export class MakeTransferGroup {
    makeTransactionForm: FormGroup;
    imageUrl: string = newImageBase64;

    constructor(private formBuilder: FormBuilder, private transactionsService: TransactionsService, private titleCase: TitleCasePipe) {
        this.makeTransactionForm = this.formBuilder.group({
            accountFromName: [{ value: '', disabled: true }],
            merchant: [null, [Validators.required, Validators.minLength(4)]],
            amount: [null, [Validators.required]]
        })
    }

    onAddTransactionGroup(): void {
        const formValues = this.makeTransactionForm.value;
        let newTransaction = new Transaction(
            formValues.amount.toFixed(2),
            "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16),
            this.titleCase.transform(formValues.merchant),
            newImageBase64,
            Date.now(),
            'Online Transactions'
        );
        this.transactionsService.onTransactionAdd(newTransaction)
        this.makeTransactionForm.reset()
    }

    getUserInput(): Transaction{
        return this.makeTransactionForm.value;
    }
}