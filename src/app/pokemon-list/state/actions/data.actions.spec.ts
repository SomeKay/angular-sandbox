import { pokemonListResponseMock } from 'src/app/shared/models/pokemon-list-response.mock';
import {
    DataActionTypes,
    FetchPokemonList,
    FetchPokemonListError,
    FetchPokemonListSuccess
} from './data.actions';

describe('pokemonList.DataActionTypes', () => {
    it('should create FetchPokemonList Action', () => {
        let action: FetchPokemonList = new FetchPokemonList();
        expect(action.type).toBe(DataActionTypes.FETCH_POKEMON_LIST);
        expect(action.payload).toBeUndefined();

        action = new FetchPokemonList('foo');
        expect(action.type).toBe(DataActionTypes.FETCH_POKEMON_LIST);
        expect(action.payload).toBe('foo');
    });

    it('should create FetchPokemonListSuccess Action', () => {
        const action: FetchPokemonListSuccess = new FetchPokemonListSuccess(
            pokemonListResponseMock
        );

        expect(action.type).toBe(DataActionTypes.FETCH_POKEMON_LIST_SUCCESS);
        expect(action.payload).toBe(pokemonListResponseMock);
    });

    it('should create FetchPokemonListError Action', () => {
        const action: FetchPokemonListError = new FetchPokemonListError();

        expect(action.type).toBe(DataActionTypes.FETCH_POKEMON_LIST_ERROR);
    });
});
