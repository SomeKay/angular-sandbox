import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/shared/models/pokemon';
import { SharedStateService } from 'src/app/shared/state/services/shared-state.service';
import { PokemonDetailsData } from '../../models/pokemon-details-data';
import { PokemonDetailsStateService } from '../../state/services/pokemon-details-state.service';

@Component({
    selector: 'pkmn-details',
    templateUrl: './pokemon-details.component.html'
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {
    subscriptions: Subscription = new Subscription();
    name: string;
    pokemon: Pokemon;

    constructor(
        private route: ActivatedRoute,
        private pokemonDetailsStateService: PokemonDetailsStateService,
        private sharedStateService: SharedStateService
    ) {}

    ngOnInit() {
        this.subscriptions.add(
            this.pokemonDetailsStateService
                .getDataState()
                .subscribe((data: PokemonDetailsData) => {
                    this.pokemon = data.pokemon;
                })
        );

        this.subscriptions.add(
            this.route.paramMap.subscribe((params: ParamMap) => {
                this.name = params.get('name');

                this.fetchPokemonDetails();
                this.sharedStateService.addLoading();
            })
        );
    }

    fetchPokemonDetails() {
        this.pokemonDetailsStateService.fetchPokemonDetails(this.name);
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
