import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonDetailsData } from '../../models/pokemon-details-data';
import * as dataActions from '../actions/data.actions';
import * as pokemonListReducers from '../reducers';

@Injectable()
export class PokemonDetailsStateService {
    constructor(private store: Store<pokemonListReducers.State>) {}

    fetchPokemonDetails(name: string): void {
        this.store.dispatch(new dataActions.FetchPokemonDetails(name));
    }

    getDataState(): Observable<PokemonDetailsData> {
        return this.store.pipe(
            select(pokemonListReducers.getPokemonDetailsState),
            map(pokemonDetailsState => pokemonDetailsState.data)
        );
    }
}
