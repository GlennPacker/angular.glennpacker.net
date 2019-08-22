import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandingCardComponent } from './expanding-card/expanding-card.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    CardComponent,
    ExpandingCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    ExpandingCardComponent
  ]
})
export class ComponentsModule { }
