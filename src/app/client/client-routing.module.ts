import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsContainerComponent } from './containers/clients-container/clients-container.component';

const routes: Routes = [
    {
        path: '', component: ClientsContainerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class ClientRoutingModule {
}
