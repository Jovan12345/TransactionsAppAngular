import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";

const routes: Routes =[
    {path: 'main', component: MainComponent},
    {path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: '**', redirectTo: '/shared/error'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}