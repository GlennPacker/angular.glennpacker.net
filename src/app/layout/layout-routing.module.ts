import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
            { path: 'back-end', loadChildren: () => import('../back-end/back-end.module').then(m => m.BackEndModule) },
            { path: 'clients', loadChildren: () => import('../client/client.module').then(m => m.ClientModule) },
            { path: 'contact', loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule) },
            { path: 'front-end', loadChildren: () => import('../front-end/front-end.module').then(m => m.FrontEndModule) },
            { path: 'spa', loadChildren: () => import('../spa/spa.module').then(m => m.SpaModule) },
            {
                path: 'angular',
                loadChildren: () => import('../angular-summary/angular-summary.module').then(m => m.AngularSummaryModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class LayoutRoutingModule {}
