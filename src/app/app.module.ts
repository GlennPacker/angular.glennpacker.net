import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { ClientsComponent } from './pages/components/clients/clients.component';
import { FrontEndComponent } from './pages/components/front-end/front-end.component';
import { BackEndComponent } from './pages/components/back-end/back-end.component';
import { SpaComponent } from './pages/components/spa/spa.component';
import { ContactComponent } from './pages/components/contact/contact.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, ListCardComponent, ClientsComponent, FrontEndComponent, BackEndComponent, SpaComponent, ContactComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
