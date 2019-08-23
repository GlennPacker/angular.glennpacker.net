import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandingCardComponent } from './expanding-card/expanding-card.component';
import { CardComponent } from './card/card.component';
import { ExpanderComponent } from './expander/expander.component';

@NgModule({
  declarations: [
    CardComponent,
    ExpandingCardComponent,
    ExpanderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    ExpandingCardComponent,
    ExpanderComponent
  ]
})
export class ComponentsModule { }
