import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';
import { PokemonListRoutingModule } from './pokemon-list.routing.module';
import { DataEffects } from './state/effects/data.effects';
import { reducers } from './state/reducers';
import { PokemonListStateService } from './state/services/pokemon-list.service';

@NgModule({
    declarations: [PokemonListComponent],
    imports: [
        BrowserModule,
        StoreModule.forFeature('pokemonList', reducers),
        EffectsModule.forFeature([DataEffects]),
        PokemonListRoutingModule
    ],
    providers: [PokemonListStateService]
})
export class PokemonListModule {}
