import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackEndComponent } from './back-end.component';
import { BackEndRoutingModule } from './back-end-routing.module';

@NgModule({
  declarations: [BackEndComponent],
  imports: [
    CommonModule,
    BackEndRoutingModule
  ]
})
export class BackEndModule { }
