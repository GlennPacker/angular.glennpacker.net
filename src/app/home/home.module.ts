import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { ClientModule } from '../client/client.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HistoriesModule } from '../histories/histories.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { QualificationModule } from '../qualifications/qualification.module';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        HomeRoutingModule,
        HistoriesModule,
        ComponentsModule,
        ClientModule,
        QualificationModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class HomeModule { }
