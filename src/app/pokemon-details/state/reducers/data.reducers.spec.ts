import { pokemonResponseMock1 } from 'src/app/shared/models/pokemon-response.mock';
import { FetchPokemonDetailsSuccess } from '../actions/data.actions';
import * as dataReducers from './data.reducers';

describe('pokemonDetails.DataReducers', () => {
    it('should have initial state', () => {
        expect(dataReducers.initialState).toEqual({
            pokemon: undefined
        });
    });

    it('should store the pokemon details', () => {
        const action = new FetchPokemonDetailsSuccess(pokemonResponseMock1);
        const state = dataReducers.reducer(dataReducers.initialState, action);

        expect(state.pokemon).toEqual({
            ...pokemonResponseMock1,
            sprites: {
                frontDefault: pokemonResponseMock1.sprites.front_default
            }
        });
    });

    it('should return default state if action is not recognized', () => {
        const action: any = { foo: 'bar' };
        const state = dataReducers.reducer(dataReducers.initialState, action);

        expect(state).toEqual(dataReducers.initialState);
    });
});
