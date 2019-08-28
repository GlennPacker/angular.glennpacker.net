import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSummaryComponent } from './angular-summary/angular-summary.component';
import { ComponentsModule } from '../components/components.module';
import { QualificationModule } from '../qualifications/qualification.module';
import { AngularSummaryRoutingModule } from './angular-summary-routing.module';

@NgModule({
    declarations: [AngularSummaryComponent],
    imports: [CommonModule, AngularSummaryRoutingModule, ComponentsModule, QualificationModule]
})
export class AngularSummaryModule {}
