import { CommonModule, registerLocaleData } from "@angular/common";
import { LOCALE_ID, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { MainComponent } from "./main.component";
import { MakeTransferComponent } from "./make-transfer/make-transfer.component";
import { RecentTransactionComponent } from "./recent-transactions/recent-transaction/recent-transaction.component";
import { RecentTransactionsComponent } from "./recent-transactions/recent-transactions.component";
import localeSr from '@angular/common/locales/sr';
registerLocaleData(localeSr);

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
    exports:[
        MainComponent
    ],
    providers:[
        {provide: LOCALE_ID, useValue: 'sr'}
    ]
})
export class MainModules { }