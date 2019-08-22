import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryContainerComponent } from './containers/history-container/history-container.component';
import { HistoryComponent } from './components/history/history.component';

// NgRx
import { reducer } from './state/history.reducer';
import { StoreModule } from '@ngrx/store';
import { HistoryEffects } from './state/history.effects';
import { EffectsModule } from '@ngrx/effects';
import { ComponentsModule } from '../components/components.module';
import { HistoryItemComponent } from './components/history-item/history-item.component';

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
  ]
})
export class HistoriesModule { }
