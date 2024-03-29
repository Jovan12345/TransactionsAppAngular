import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TransactionsService } from "../main/recent-transactions/transactions.service";
import { ErrorComponentComponent } from "./components/error-component/error-component.component";
import { SearchTransactionsComponent } from "./components/search-transactions/search-transactions.component";
import { SharedRoutingModule } from "./shared.routing.module";
import { SortTransactionsComponent } from "./components/sort-transactions/sort-transactions.component";
import { SuccessComponentComponent } from "./components/success-component/success-component.component";
import { HoverDirective } from "./directives/hover.directive";
import { LeftBorderColorDirective } from "./directives/left-border-color.directive";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalConfirmComponent } from "./components/modal-confirm/modal-confirm.component";
import { UsdToDinersPipe } from "./pipes/usd-to-diners.pipe";

@NgModule({
    declarations: [
        SearchTransactionsComponent,
        SortTransactionsComponent,
        SuccessComponentComponent,
        ErrorComponentComponent,
        ModalConfirmComponent,
        HoverDirective,
        LeftBorderColorDirective,
        UsdToDinersPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedRoutingModule,
        FontAwesomeModule
    ],
    exports: [
        SearchTransactionsComponent,
        SortTransactionsComponent,
        SuccessComponentComponent,
        ErrorComponentComponent,
        ModalConfirmComponent,
        HoverDirective,
        LeftBorderColorDirective,
        UsdToDinersPipe
    ],
    providers: [TransactionsService]
})
export class SharedModule { }
