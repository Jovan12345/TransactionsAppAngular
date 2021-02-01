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
        let filteredTransactions: Transaction[];
        filteredTransactions = this.transactions.data.filter((value: Transaction) => {
            console.log(value.merchant)
            console.log('Search value', searchValue)
            value.merchant.toLowerCase().indexOf(searchValue) !== -1
        })

        console.log(filteredTransactions)
    }

}