import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryContainerComponent } from './containers/history-container/history-container.component';
import { HistoryComponent } from './components/history/history.component';

// NgRx
import { reducer } from './state/history.reducer';
import { StoreModule } from '@ngrx/store';
import { HistoryEffects } from './state/history.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    HistoryComponent,
    HistoryContainerComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('history', reducer),
    EffectsModule.forFeature([HistoryEffects])
  ],
  exports: [
    HistoryComponent,
    HistoryContainerComponent
  ]
})
export class HistoriesModule { }
