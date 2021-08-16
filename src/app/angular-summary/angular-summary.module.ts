import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AngularSummaryComponent } from './components/angular-summary/angular-summary.component';
import { AngularSummaryComponentComponent } from './components/angular-summary-component/angular-summary-component.component';
import { AngularSummaryContentProjectionComponent } from './components/angular-summary-content-projection/angular-summary-content-projection.component';
import { AngularSummaryDirectiveComponent } from './components/angular-summary-directive/angular-summary-directive.component';
import { AngularSummaryModuleComponent } from './components/angular-summary-module/angular-summary-module.component';
import { AngularSummaryNgRxComponent } from './components/angular-summary-ng-rx/angular-summary-ng-rx.component';
import { AngularSummaryRoutingComponent } from './components/angular-summary-routing/angular-summary-routing.component';
import { AngularSummaryRoutingModule } from './angular-summary-routing.module';
import { AngularSummaryRxjsComponent } from './components/angular-summary-rxjs/angular-summary-rxjs.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { QualificationModule } from '../qualifications/qualification.module';

// tslint:disable-next-line:max-line-length




@NgModule({
    declarations: [
        AngularSummaryComponent,
        AngularSummaryModuleComponent,
        AngularSummaryComponentComponent,
        AngularSummaryDirectiveComponent,
        AngularSummaryRoutingComponent,
        AngularSummaryContentProjectionComponent,
        AngularSummaryRxjsComponent,
        AngularSummaryNgRxComponent
    ],
    imports: [CommonModule, AngularSummaryRoutingModule, ComponentsModule, QualificationModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class AngularSummaryModule {}
