import { PokemonDetailsData } from '../../models/pokemon-details-data';
import { DataActions, DataActionTypes } from '../actions/data.actions';

export type State = PokemonDetailsData;

export const initialState: State = {
    pokemon: undefined
};

export function reducer(
    state: State = initialState,
    action: DataActions
): State {
    switch (action.type) {
        case DataActionTypes.FETCH_POKEMON_DETAILS: {
            return {
                pokemon: undefined
            };
        }

        case DataActionTypes.FETCH_POKEMON_DETAILS_SUCCESS: {
            return {
                pokemon: {
                    id: action.payload.id,
                    weight: action.payload.weight,
                    name: action.payload.name,
                    sprites: {
                        frontDefault: action.payload.sprites.front_default
                    }
                }
            };
        }

        default: {
            return state;
        }
    }
}

export const getState = (state: State) => state;
