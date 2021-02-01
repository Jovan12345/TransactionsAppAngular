export class Transactions {
    data?: Transaction[]
}

export class Transaction {
    amount: string;
    categoryCode: string;
    merchant: string;
    merchantLogo: string;
    transactionDate: number;
    transactionType: string;

    constructor(amount: string, categoryCode: string, merchant: string, merchantLogo: string, transactionDate: number, transactionType: string) {
        this.amount = amount;
        this.categoryCode = categoryCode;
        this.merchant = merchant;
        this.merchantLogo = merchantLogo;
        this.transactionDate = transactionDate;
        this.transactionType = transactionType
    }
}
