import { storeMock } from 'src/app/shared/state/store.mock';
import { FetchPokemonDetails } from '../actions/data.actions';
import { PokemonDetailsStateService } from './pokemon-details-state.service';

describe('pokemonDetails.PokemonDetailsStateService', () => {
    let testee: PokemonDetailsStateService;

    beforeEach(() => {
        testee = new PokemonDetailsStateService(storeMock);
    });

    it('should dispatch FetchPokemonDetails action', () => {
        const action = new FetchPokemonDetails('foo');
        storeMock.dispatch = jest.fn();
        testee.fetchPokemonDetails('foo');

        expect(storeMock.dispatch).toHaveBeenCalledWith(action);
        expect(storeMock.dispatch).toHaveBeenCalledTimes(1);
    });

    it('should provide the data part of the state', () => {
        storeMock.pipe = jest.fn().mockReturnValue('foo');
        expect(testee.getDataState()).toEqual('foo');
    });
});
