import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsContainerComponent } from './containers/clients-container/clients-container.component';

const routes: Routes = [
    {
        path: '', component: ClientsContainerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule {
}
