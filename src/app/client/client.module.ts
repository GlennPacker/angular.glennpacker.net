import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ClientCardComponent } from './components/client-card/client-card.component';
import { ClientEffects } from './state/client.effects';
import { ClientPanelComponent } from './components/client-panel/client-panel.component';
import { ClientPanelContainerComponent } from './containers/client-panel-container/client-panel-container.component';
import { ClientPanelItemComponent } from './components/client-panel-item/client-panel-item.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsContainerComponent } from './containers/clients-container/clients-container.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/client.reducer';

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
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ClientModule { }
