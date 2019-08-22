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


@NgModule({
  declarations: [
    ClientsComponent,
    ClientsContainerComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    StoreModule.forFeature('clients', reducer),
    EffectsModule.forFeature([ClientEffects]),
    ComponentsModule
  ]
})
export class ClientModule { }
