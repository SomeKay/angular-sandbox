import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/shared/models/pokemon';
import { SharedStateService } from 'src/app/shared/state/services/shared-state.service';
import { PokemonListStateService } from '../../state/services/pokemon-list-state.service';

@Component({
    selector: 'pkmn-list',
    templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit, OnDestroy {
    subscriptions: Subscription = new Subscription();
    pokemonList: Pokemon[];
    previousUrl = '';
    nextUrl = '';

    constructor(
        private pokemonListStateService: PokemonListStateService,
        private sharedStateService: SharedStateService
    ) {}

    ngOnInit() {
        this.subscriptions.add(
            this.pokemonListStateService.getDataState().subscribe(data => {
                this.pokemonList = data.pokemonList;
                this.previousUrl = data.previousUrl;
                this.nextUrl = data.nextUrl;
            })
        );

        this.fetchPokemonList();
        this.sharedStateService.addLoading();
    }

    fetchPokemonList() {
        this.pokemonListStateService.fetchPokemonList();
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
