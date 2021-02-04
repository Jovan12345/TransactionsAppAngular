import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

import { Transaction, Transactions } from "./transactions.model";
import jsonTransactionsData from '../../../assets/mock/transactions.json';

@Injectable({ providedIn: 'root' })
export class TransactionsService {
    transactions: Transactions = jsonTransactionsData;
    transactionsChanged = new Subject<Transaction[]>();

    constructor(private router: Router) { }

    // Check if transactions exist in Local storage, otherwise take the mock data
    getTransactions(): Transaction[] {
        return localStorage.getItem('transactions') ? JSON.parse(localStorage.getItem('transactions')) : this.transactions.data.slice()
    }

    onTransactionAdd(newTransaction: Transaction): void {
        this.transactions.data.unshift(newTransaction)
        localStorage.setItem('transactions', JSON.stringify(this.transactions.data))
        this.transactionsChanged.next(this.transactions.data.slice())
        this.router.navigate(['shared/success'], { state: { transaction: newTransaction } })
    }

    onTransactionSearch(searchValue: string): void {
        const filteredTransactions = searchValue === '' ? this.transactions.data : this.transactions.data.filter(value => {
            return value.merchant.toLowerCase().indexOf(searchValue) !== -1
        })
        this.transactionsChanged.next(filteredTransactions);
    }

    sortTransaction(sortBy: string): void {
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
                const sortedTransactionsAmount = this.transactions.data.sort((a, b) => +b.amount - +a.amount)
                this.transactionsChanged.next(sortedTransactionsAmount)
                break;
            default:
                this.transactionsChanged.next(this.transactions.data.slice())
        }
    }
}