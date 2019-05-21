import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ListPagingComponent } from './components/list-paging/list-paging.component';
import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';
import { PokemonListRoutingModule } from './pokemon-list.routing.module';
import { DataEffects } from './state/effects/data.effects';
import { reducers } from './state/reducers';
import { PokemonListStateService } from './state/services/pokemon-list-state.service';

@NgModule({
    declarations: [PokemonListComponent, ListPagingComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature('pokemonList', reducers),
        EffectsModule.forFeature([DataEffects]),
        PokemonListRoutingModule
    ],
    providers: [PokemonListStateService]
})
export class PokemonListModule {}
