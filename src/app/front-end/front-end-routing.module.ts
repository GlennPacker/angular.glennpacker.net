import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    exports: [RouterModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class FrontEndRoutingModule {
}
