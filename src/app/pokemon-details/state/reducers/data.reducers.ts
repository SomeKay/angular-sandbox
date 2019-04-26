import { Pokemon } from 'src/app/shared/models/pokemon';
import { DataActions, DataActionTypes } from '../actions/data.actions';

export interface State {
    pokemon: Pokemon;
}

export const initialState: State = {
    pokemon: null
};

export function reducer(
    state: State = initialState,
    action: DataActions
): State {
    switch (action.type) {
        case DataActionTypes.FETCH_POKEMON_DETAILS: {
            return {
                pokemon: null
            };
        }

        case DataActionTypes.FETCH_POKEMON_DETAILS_SUCCESS: {
            return {
                pokemon: {
                    id: action.payload.id,
                    weight: action.payload.weight,
                    name: action.payload.name,
                    sprites: {
                        // tslint:disable-next-line: no-string-literal
                        frontDefault: action.payload.sprites['front_default']
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
