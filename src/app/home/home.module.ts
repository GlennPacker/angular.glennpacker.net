import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HistoriesModule } from '../histories/histories.module';
import { ComponentsModule } from '../components/components.module';
import { ClientModule } from '../client/client.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        HomeRoutingModule,
        HistoriesModule,
        ComponentsModule,
        ClientModule,
        SlickCarouselModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
