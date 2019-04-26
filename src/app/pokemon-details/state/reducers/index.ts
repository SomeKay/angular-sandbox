import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as dataReducers from './data.reducers';

export interface State {
    data: dataReducers.State;
}

export const reducers: ActionReducerMap<State> = {
    data: dataReducers.reducer
};

export const getPokemonDetailsState = createFeatureSelector<State>(
    'pokemonDetails'
);
