import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { ExpanderComponent } from './expander/expander.component';
import { ExpandingCardComponent } from './expanding-card/expanding-card.component';

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
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ComponentsModule { }
