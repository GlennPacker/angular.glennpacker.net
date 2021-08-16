import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { EffectsModule } from '@ngrx/effects';
import { HistoryComponent } from './components/history/history.component';
import { HistoryContainerComponent } from './containers/history-container/history-container.component';
import { HistoryEffects } from './state/history.effects';
import { HistoryItemComponent } from './components/history-item/history-item.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/history.reducer';

// NgRx







@NgModule({
  declarations: [
    HistoryComponent,
    HistoryContainerComponent,
    HistoryItemComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    StoreModule.forFeature('history', reducer),
    EffectsModule.forFeature([HistoryEffects])
  ],
  exports: [
    HistoryComponent,
    HistoryContainerComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HistoriesModule { }
