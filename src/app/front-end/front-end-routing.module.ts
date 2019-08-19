import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontEndComponent } from './front-end.component';

const routes: Routes = [
    {
        path: '', component: FrontEndComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class FrontEndRoutingModule {
}
