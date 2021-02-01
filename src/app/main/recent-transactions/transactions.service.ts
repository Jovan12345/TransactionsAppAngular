import { Transaction, Transactions } from "./transactions.model";

import jsonTransactionsData from '../../../assets/mock/transactions.json';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TransactionsService {
    transactions: Transactions = jsonTransactionsData;
    transactionsChanged = new Subject<Transaction[]>();

    getTransactions() {
        return this.transactions.data.slice()
    }

    onTransactionAdd(newTransaction: Transaction) {
        this.transactions.data.push(newTransaction)
        this.transactionsChanged.next(this.transactions.data.slice())
    }

    onTransactionSearch(searchValue: string) {
        const filteredTransactions = searchValue === '' ? this.transactions.data : this.transactions.data.filter(value => {
            return value.merchant.toLowerCase().indexOf(searchValue) !== -1
        })
        this.transactionsChanged.next(filteredTransactions);
    }

    sortTransaction(sortBy: string) {
        switch (sortBy) {
            case 'date':
                const sortedTransactionsDate = this.transactions.data.sort((a, b) => a.transactionDate - b.transactionDate)
                this.transactionsChanged.next(sortedTransactionsDate);
                break;
            case 'beneficiary':
                const sortedTransactionsBeneficiary = this.transactions.data.sort((a, b) => a.merchant.localeCompare(b.merchant))
                this.transactionsChanged.next(sortedTransactionsBeneficiary);
                break;
            case 'amount':
                const sortedTransactionsAmount = this.transactions.data.sort((a, b) => b.amount.localeCompare(a.amount))
                this.transactionsChanged.next(sortedTransactionsAmount)
                break;
            default:
                this.transactionsChanged.next(this.transactions.data.slice())
        }
    }
}