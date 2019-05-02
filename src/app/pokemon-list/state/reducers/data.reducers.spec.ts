import { pokemonListResponseMock } from 'src/app/shared/models/pokemon-list-response.mock';
import { FetchPokemonListSuccess } from '../actions/data.actions';
import * as dataReducers from './data.reducers';

describe('pokemonList.DataReducers', () => {
    it('should have initial state', () => {
        expect(dataReducers.initialState).toEqual({
            pokemonList: [],
            nextUrl: '',
            previousUrl: ''
        });
    });

    it('should store the pokemon list and fetch urls', () => {
        const action = new FetchPokemonListSuccess(pokemonListResponseMock);
        const state = dataReducers.reducer(dataReducers.initialState, action);

        expect(state.pokemonList).toEqual(
            pokemonListResponseMock.results.map(p => ({ name: p.name }))
        );
        expect(state.nextUrl).toBe(pokemonListResponseMock.next);
        expect(state.previousUrl).toBe(pokemonListResponseMock.previous);
    });

    it('should return default state if action is not recognized', () => {
        const action: any = { foo: 'bar' };
        const state = dataReducers.reducer(dataReducers.initialState, action);

        expect(state).toEqual(dataReducers.initialState);
    });
});
