import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ErrorComponentComponent } from "./shared/error-component/error-component.component";

const routes: Routes =[
    {path: 'main', component: MainComponent},
    {path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: '**', component: ErrorComponentComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}