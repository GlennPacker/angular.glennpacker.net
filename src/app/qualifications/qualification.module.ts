import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QualificationContainerComponent } from './containers/qualification-container/qualification-container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/qualification.reducer';
import { QualificationEffects } from './state/qualification.effects';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { QualificationCarouselComponent } from './components/qualification-carousel/qualification-carousel.component';

@NgModule({
    declarations: [QualificationContainerComponent, QualificationCarouselComponent],
    imports: [
        CommonModule,
        SlickCarouselModule,
        StoreModule.forFeature('qualification', reducer),
        EffectsModule.forFeature([QualificationEffects])
    ],
    exports: [QualificationContainerComponent]
})
export class QualificationModule {}
