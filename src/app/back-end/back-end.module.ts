import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BackEndComponent } from './back-end.component';
import { BackEndRoutingModule } from './back-end-routing.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { QualificationModule } from '../qualifications/qualification.module';

@NgModule({
    declarations: [BackEndComponent],
    imports: [CommonModule, BackEndRoutingModule, ComponentsModule, QualificationModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class BackEndModule {}
