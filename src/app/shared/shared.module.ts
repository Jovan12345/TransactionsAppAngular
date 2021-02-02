import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { TransactionsService } from "../main/recent-transactions/transactions.service";
import { ErrorComponentComponent } from "./error-component/error-component.component";
import { SearchTransactionsComponent } from "./search-transactions/search-transactions.component";
import { SharedRoutingModule } from "./shared.routing.module";
import { SortTransactionsComponent } from "./sort-transactions/sort-transactions.component";
import { SuccessComponentComponent } from "./success-component/success-component.component";

@NgModule({
    declarations: [
        SearchTransactionsComponent,
        SortTransactionsComponent,
        SuccessComponentComponent,
        ErrorComponentComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedRoutingModule
    ],
    exports: [
        SearchTransactionsComponent,
        SortTransactionsComponent,
        SuccessComponentComponent,
        ErrorComponentComponent,
    ],
    providers: [TransactionsService]
})
export class SharedModule { }
