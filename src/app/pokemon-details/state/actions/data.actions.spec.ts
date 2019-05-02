import { pokemonResponseMock1 } from 'src/app/shared/models/pokemon-response.mock';
import {
    DataActionTypes,
    FetchPokemonDetails,
    FetchPokemonDetailsError,
    FetchPokemonDetailsSuccess
} from './data.actions';

describe('pokemonDetails.DataActionTypes', () => {
    it('should create FetchPokemonDetails Action', () => {
        const action: FetchPokemonDetails = new FetchPokemonDetails('foo');

        expect(action.type).toBe(DataActionTypes.FETCH_POKEMON_DETAILS);
        expect(action.payload).toBe('foo');
    });

    it('should create FetchPokemonDetailsSuccess Action', () => {
        const action: FetchPokemonDetailsSuccess = new FetchPokemonDetailsSuccess(
            pokemonResponseMock1
        );

        expect(action.type).toBe(DataActionTypes.FETCH_POKEMON_DETAILS_SUCCESS);
        expect(action.payload).toBe(pokemonResponseMock1);
    });

    it('should create FetchPokemonDetailsError Action', () => {
        const action: FetchPokemonDetailsError = new FetchPokemonDetailsError();

        expect(action.type).toBe(DataActionTypes.FETCH_POKEMON_DETAILS_ERROR);
    });
});
