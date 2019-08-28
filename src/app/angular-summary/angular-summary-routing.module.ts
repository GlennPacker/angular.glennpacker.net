import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularSummaryComponent } from './angular-summary/angular-summary.component';

const routes: Routes = [
    {
        path: '',
        component: AngularSummaryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AngularSummaryRoutingModule {}
