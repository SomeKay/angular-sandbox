import { HttpResponse } from '@angular/common/http';
import { cold } from 'jest-marbles';
import { Observable, of, throwError } from 'rxjs';
import { PokemonResponse } from 'src/app/shared/models/api/pokemon-response';
import { pokemonResponseMock1 } from 'src/app/shared/models/api/pokemon-response.mock';
import { ApiService } from 'src/app/shared/services/api.service';
import { MockApiService } from 'src/app/shared/services/api.service.mock';
import { RemoveLoading } from 'src/app/shared/state/actions/layout.actions';
import {
    FetchPokemonDetails,
    FetchPokemonDetailsError,
    FetchPokemonDetailsSuccess
} from '../actions/data.actions';
import { DataEffects } from './data.effects';

describe('pokemonDetails.DataEffects', () => {
    let testee: DataEffects;
    let apiServiceMock: ApiService;

    beforeEach(() => {
        apiServiceMock = new MockApiService();
    });

    it('should handle the fetch pokemon details action', () => {
        const startAction = new FetchPokemonDetails('foo');
        const endActionSuccess = new FetchPokemonDetailsSuccess(
            pokemonResponseMock1
        );
        const endActionRemoveLoading = new RemoveLoading();

        const actions = cold('--s', { s: startAction });
        const expected = cold('--(ef)', {
            e: endActionSuccess,
            f: endActionRemoveLoading
        });

        apiServiceMock.getPokemonDetails = (): Observable<
            HttpResponse<PokemonResponse>
        > => of({ body: pokemonResponseMock1 } as any);

        testee = new DataEffects(actions, apiServiceMock);
        expect(testee.fetchPokemonDetails$).toBeObservable(expected);
    });

    it('should handle the fetch pokemon details error case', () => {
        const startAction = new FetchPokemonDetails('foo');
        const endActionError = new FetchPokemonDetailsError();
        const endActionRemoveLoading = new RemoveLoading();

        const actions = cold('--s', { s: startAction });
        const expected = cold('--(ef)', {
            e: endActionError,
            f: endActionRemoveLoading
        });

        apiServiceMock.getPokemonDetails = () => throwError(null);

        testee = new DataEffects(actions, apiServiceMock);
        expect(testee.fetchPokemonDetails$).toBeObservable(expected);
    });
});
