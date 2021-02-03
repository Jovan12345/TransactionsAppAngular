import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

// Custom Modals
import { SharedModule } from "../shared/shared.module";
import { MainComponent } from "./main.component";

// Custom components
import { MakeTransferComponent } from "./make-transfer/make-transfer.component";
import { RecentTransactionComponent } from "./recent-transactions/recent-transaction/recent-transaction.component";
import { RecentTransactionsComponent } from "./recent-transactions/recent-transactions.component";

@NgModule({
    declarations: [
        MainComponent,
        MakeTransferComponent,
        RecentTransactionsComponent,
        RecentTransactionComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [MainComponent]
})
export class MainModules { }