import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularSummaryComponent } from './components/angular-summary/angular-summary.component';
import { AngularSummaryComponentComponent } from './components/angular-summary-component/angular-summary-component.component';
// tslint:disable-next-line:max-line-length
import { AngularSummaryContentProjectionComponent } from './components/angular-summary-content-projection/angular-summary-content-projection.component';
import { AngularSummaryDirectiveComponent } from './components/angular-summary-directive/angular-summary-directive.component';
import { AngularSummaryRoutingComponent } from './components/angular-summary-routing/angular-summary-routing.component';
import { AngularSummaryModuleComponent } from './components/angular-summary-module/angular-summary-module.component';
import { AngularSummaryNgRxComponent } from './components/angular-summary-ng-rx/angular-summary-ng-rx.component';
import { AngularSummaryRxjsComponent } from './components/angular-summary-rxjs/angular-summary-rxjs.component';

const routes: Routes = [
    {
        path: '',
        component: AngularSummaryComponent
    },
    {
        path: 'component',
        component: AngularSummaryComponentComponent
    },
    {
        path: 'content-projection',
        component: AngularSummaryContentProjectionComponent
    },
    {
        path: 'directive',
        component: AngularSummaryDirectiveComponent
    },
    {
        path: 'module',
        component: AngularSummaryModuleComponent
    },
    {
        path: 'ngrx',
        component: AngularSummaryNgRxComponent
    },
    {
        path: 'routing',
        component: AngularSummaryRoutingComponent
    },
    {
        path: 'rxjs',
        component: AngularSummaryRxjsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AngularSummaryRoutingModule {}
