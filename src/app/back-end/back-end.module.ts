import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackEndComponent } from './back-end.component';
import { BackEndRoutingModule } from './back-end-routing.module';
import { ComponentsModule } from '../components/components.module';
import { QualificationModule } from '../qualifications/qualification.module';

@NgModule({
    declarations: [BackEndComponent],
    imports: [CommonModule, BackEndRoutingModule, ComponentsModule, QualificationModule]
})
export class BackEndModule {}
