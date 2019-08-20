import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
            { path: 'spa', loadChildren: () => import('../spa/spa-routing.module').then(m => m.SpaRoutingModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
