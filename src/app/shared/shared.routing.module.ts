import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { SuccessComponentComponent } from './components/success-component/success-component.component';

const routes: Routes = [
    { path: 'success', component: SuccessComponentComponent },
    { path: 'error', component: ErrorComponentComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SharedRoutingModule { }
