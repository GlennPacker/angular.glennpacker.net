import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { QualificationModule } from '../qualifications/qualification.module';
import { SpaComponent } from './spa.component';
import { SpaRoutingModule } from './spa-routing.module';

@NgModule({
    declarations: [SpaComponent],
    imports: [CommonModule, SpaRoutingModule, ComponentsModule, QualificationModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class SpaModule {}
