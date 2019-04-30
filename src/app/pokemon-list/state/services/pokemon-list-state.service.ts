import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as dataActions from '../actions/data.actions';
import * as pokemonListReducers from '../reducers';
import * as dataReducers from '../reducers/data.reducers';

@Injectable()
export class PokemonListStateService {
    constructor(private store: Store<pokemonListReducers.State>) {}

    fetchPokemonList(url?: string): void {
        this.store.dispatch(new dataActions.FetchPokemonList(url));
    }

    getDataState(): Observable<dataReducers.State> {
        return this.store.pipe(
            select(pokemonListReducers.getPokemonListState),
            map(pokemonListState => pokemonListState.data)
        );
    }
}
