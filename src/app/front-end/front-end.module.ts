import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { FrontEndComponent } from './front-end.component';
import { FrontEndRoutingModule } from './front-end-routing.module';
import { QualificationModule } from '../qualifications/qualification.module';

@NgModule({
    declarations: [FrontEndComponent],
    imports: [CommonModule, FrontEndRoutingModule, ComponentsModule, QualificationModule],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class FrontEndModule {}
