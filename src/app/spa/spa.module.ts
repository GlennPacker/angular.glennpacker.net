import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaComponent } from './spa.component';
import { QualificationModule } from '../qualifications/qualification.module';
import { ComponentsModule } from '../components/components.module';
import { SpaRoutingModule } from './spa-routing.module';

@NgModule({
    declarations: [SpaComponent],
    imports: [CommonModule, SpaRoutingModule, ComponentsModule, QualificationModule]
})
export class SpaModule {}
