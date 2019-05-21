import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PokemonDetailsComponent } from './containers/pokemon-details/pokemon-details.component';
import { PokemonDetailsRoutingModule } from './pokemon-details-routing.module';
import { DataEffects } from './state/effects/data.effects';
import { reducers } from './state/reducers';
import { PokemonDetailsStateService } from './state/services/pokemon-details-state.service';

@NgModule({
    declarations: [PokemonDetailsComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature('pokemonDetails', reducers),
        EffectsModule.forFeature([DataEffects]),
        PokemonDetailsRoutingModule
    ],
    providers: [PokemonDetailsStateService]
})
export class PokemonDetailsModule {}
