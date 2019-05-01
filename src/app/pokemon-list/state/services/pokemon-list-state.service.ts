import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonListData } from '../../models/pokemon-list-data';
import * as dataActions from '../actions/data.actions';
import * as pokemonListReducers from '../reducers';

@Injectable()
export class PokemonListStateService {
    constructor(private store: Store<pokemonListReducers.State>) {}

    fetchPokemonList(url?: string): void {
        this.store.dispatch(new dataActions.FetchPokemonList(url));
    }

    getDataState(): Observable<PokemonListData> {
        return this.store.pipe(
            select(pokemonListReducers.getPokemonListState),
            map(pokemonListState => pokemonListState.data)
        );
    }
}
