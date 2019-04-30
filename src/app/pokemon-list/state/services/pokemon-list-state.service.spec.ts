import { storeMock } from 'src/app/shared/state/store.mock';
import { FetchPokemonList } from '../actions/data.actions';
import { PokemonListStateService } from './pokemon-list-state.service';

describe('pokemonList.PokemonListStateService', () => {
    let testee: PokemonListStateService;

    beforeEach(() => {
        testee = new PokemonListStateService(storeMock);
    });

    it('should dispatch FetchPokemonList action', () => {
        const action = new FetchPokemonList();
        storeMock.dispatch = jest.fn();
        testee.fetchPokemonList();

        expect(storeMock.dispatch).toHaveBeenNthCalledWith(1, action);
        expect(storeMock.dispatch).toHaveBeenCalledTimes(1);
    });

    it('should dispatch FetchPokemonList action with a URL', () => {
        const action = new FetchPokemonList('foo');
        storeMock.dispatch = jest.fn();
        testee.fetchPokemonList('foo');

        expect(storeMock.dispatch).toHaveBeenCalledWith(action);
        expect(storeMock.dispatch).toHaveBeenCalledTimes(1);
    });

    it('should provide the data part of the state', () => {
        storeMock.pipe = jest.fn().mockReturnValue('foo');
        expect(testee.getDataState()).toEqual('foo');
    });
});
