import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackEndComponent } from './back-end.component';


const routes: Routes = [
    {
        path: '', component: BackEndComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BackEndRoutingModule {
}
