import { Pokemon } from 'src/app/shared/models/pokemon';
import { DataActions, DataActionTypes } from '../actions/data.actions';

export interface State {
    pokemonList: Array<Pokemon>;
    nextUrl: string;
    previousUrl: string;
}

export const initialState: State = {
    pokemonList: [],
    nextUrl: '',
    previousUrl: ''
};

export function reducer(
    state: State = initialState,
    action: DataActions
): State {
    switch (action.type) {
        case DataActionTypes.FETCH_POKEMON_LIST_SUCCESS: {
            return {
                pokemonList: action.payload.results,
                nextUrl: action.payload.next,
                previousUrl: action.payload.previous
            };
        }

        default: {
            return state;
        }
    }
}

export const getState = (state: State) => state;
