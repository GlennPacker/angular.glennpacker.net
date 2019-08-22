import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandingCardComponent } from './expanding-card/expanding-card.component';

@NgModule({
  declarations: [
    ExpandingCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExpandingCardComponent
  ]
})
export class ComponentsModule { }
