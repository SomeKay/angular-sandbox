import { HttpResponse } from '@angular/common/http';
import { cold } from 'jest-marbles';
import { Observable, of, throwError } from 'rxjs';
import { DataEffects } from 'src/app/pokemon-list/state/effects/data.effects';
import { PokemonListResponse } from 'src/app/shared/models/api/pokemon-list-response';
import { pokemonListResponseMock } from 'src/app/shared/models/api/pokemon-list-response.mock';
import { ApiService } from 'src/app/shared/services/api.service';
import { MockApiService } from 'src/app/shared/services/api.service.mock';
import { RemoveLoading } from 'src/app/shared/state/actions/layout.actions';
import {
    FetchPokemonList,
    FetchPokemonListError,
    FetchPokemonListSuccess
} from '../actions/data.actions';

describe('pokemonList.DataEffects', () => {
    let testee: DataEffects;
    let apiServiceMock: ApiService;

    beforeEach(() => {
        apiServiceMock = new MockApiService();
    });

    it('should handle the fetch pokemon list action', () => {
        const startAction = new FetchPokemonList('foo');
        const endActionSuccess = new FetchPokemonListSuccess(
            pokemonListResponseMock
        );
        const endActionRemoveLoading = new RemoveLoading();

        const actions = cold('--s', { s: startAction });
        const expected = cold('--(ef)', {
            e: endActionSuccess,
            f: endActionRemoveLoading
        });

        apiServiceMock.getPokemonList = (): Observable<
            HttpResponse<PokemonListResponse>
        > => of({ body: pokemonListResponseMock } as any);

        testee = new DataEffects(actions, apiServiceMock);
        expect(testee.fetchPokemonList$).toBeObservable(expected);
    });

    it('should handle the fetch pokemon list error case', () => {
        const startAction = new FetchPokemonList('foo');
        const endActionError = new FetchPokemonListError();
        const endActionRemoveLoading = new RemoveLoading();

        const actions = cold('--s', { s: startAction });
        const expected = cold('--(ef)', {
            e: endActionError,
            f: endActionRemoveLoading
        });

        apiServiceMock.getPokemonList = () => throwError(null);

        testee = new DataEffects(actions, apiServiceMock);
        expect(testee.fetchPokemonList$).toBeObservable(expected);
    });
});
