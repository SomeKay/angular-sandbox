import { PokemonListData } from '../../models/pokemon-list-data';
import { DataActions, DataActionTypes } from '../actions/data.actions';

export type State = PokemonListData;

export const initialState: State = {
    lastRequestUrl: '',
    pokemonList: [],
    nextUrl: '',
    previousUrl: ''
};

export function reducer(
    state: State = initialState,
    action: DataActions
): State {
    switch (action.type) {
        case DataActionTypes.FETCH_POKEMON_LIST: {
            return {
                ...state,
                lastRequestUrl: action.payload
            };
        }

        case DataActionTypes.FETCH_POKEMON_LIST_SUCCESS: {
            const { results, next, previous } = action.payload;

            return {
                ...state,
                pokemonList: results.map(pokemon => ({ name: pokemon.name })),
                nextUrl: next,
                previousUrl: previous
            };
        }

        default: {
            return state;
        }
    }
}

export const getState = (state: State) => state;
