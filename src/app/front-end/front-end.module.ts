import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontEndComponent } from './front-end.component';
import { FrontEndRoutingModule } from './front-end-routing.module';

@NgModule({
  declarations: [
    FrontEndComponent
  ],
  imports: [
    CommonModule,
    FrontEndRoutingModule
  ]
})
export class FrontEndModule { }
