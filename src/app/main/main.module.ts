import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MainComponent } from "./main.component";
import { MakeTransferComponent } from "./make-transfer/make-transfer.component";
import { RecentTransactionsComponent } from "./recent-transactions/recent-transactions.component";
import { SearchTransactionsComponent } from "./recent-transactions/search-transactions/search-transactions.component";
import { SortTransactionsComponent } from "./recent-transactions/sort-transactions/sort-transactions.component";

@NgModule({
    declarations: [
        MainComponent,
        MakeTransferComponent,
        RecentTransactionsComponent,
        SearchTransactionsComponent,
        SortTransactionsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports:[
        MainComponent
    ]
})
export class MainModules { }