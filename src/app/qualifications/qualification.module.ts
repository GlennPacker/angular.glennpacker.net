import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { QualificationCarouselComponent } from './components/qualification-carousel/qualification-carousel.component';
import { QualificationContainerComponent } from './containers/qualification-container/qualification-container.component';
import { QualificationEffects } from './state/qualification.effects';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/qualification.reducer';

@NgModule({
    declarations: [QualificationContainerComponent, QualificationCarouselComponent],
    imports: [
        CommonModule,
        SlickCarouselModule,
        StoreModule.forFeature('qualification', reducer),
        EffectsModule.forFeature([QualificationEffects])
    ],
    exports: [QualificationContainerComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class QualificationModule {}
