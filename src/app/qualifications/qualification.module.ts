import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllQualificationContainerComponent } from './containers/all-qualification-container/all-qualification-container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/qualification.reducer';
import { QualificationEffects } from './state/qualification.effects';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { QualificationCarouselComponent } from './components/qualification-carousel/qualification-carousel.component';

@NgModule({
  declarations: [AllQualificationContainerComponent, QualificationCarouselComponent],
  imports: [
    CommonModule,
    SlickCarouselModule,
    StoreModule.forFeature('qualification', reducer),
    EffectsModule.forFeature([QualificationEffects])
  ],
  exports: [
    AllQualificationContainerComponent
  ]
})
export class QualificationModule { }
