import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';

// Components
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsContainerComponent } from './containers/clients-container/clients-container.component';

// NgRx
import { reducer } from './state/client.reducer';
import { StoreModule } from '@ngrx/store';
import { ClientEffects } from './state/client.effects';
import { EffectsModule } from '@ngrx/effects';
import { ComponentsModule } from '../components/components.module';
import { ClientPanelContainerComponent } from './containers/client-panel-container/client-panel-container.component';
import { ClientPanelComponent } from './components/client-panel/client-panel.component';
import { ClientPanelItemComponent } from './components/client-panel-item/client-panel-item.component';
import { ClientCardComponent } from './components/client-card/client-card.component';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientsContainerComponent,
    ClientPanelContainerComponent,
    ClientPanelComponent,
    ClientPanelItemComponent,
    ClientCardComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    StoreModule.forFeature('clients', reducer),
    EffectsModule.forFeature([ClientEffects]),
    ComponentsModule
  ],
  exports: [
    ClientPanelContainerComponent
  ]
})
export class ClientModule { }
