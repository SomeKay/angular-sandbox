import { HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, ReplaySubject, throwError as _throw } from 'rxjs';
import { PokemonResponse } from 'src/app/shared/models/pokemon-response';
import { pokemonResponseMock1 } from 'src/app/shared/models/pokemon-response.mock';
import { ApiService } from 'src/app/shared/services/api.service';
import { MockApiService } from 'src/app/shared/services/api.service.mock';
import {
    LayoutActionTypes,
    RemoveLoading
} from 'src/app/shared/state/actions/layout.actions';
import {
    DataActionTypes,
    FetchPokemonDetails,
    FetchPokemonDetailsError,
    FetchPokemonDetailsSuccess
} from '../actions/data.actions';
import { DataEffects } from './data.effects';

describe('pokemonDetails.DataEffects', () => {
    let testee: DataEffects;
    let actions: ReplaySubject<any>;
    let apiServiceMock: ApiService;
    let called = 0;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                {
                    provide: ApiService,
                    useClass: MockApiService
                },
                DataEffects,
                provideMockActions(() => actions)
            ]
        });

        testee = TestBed.get(DataEffects);
        apiServiceMock = TestBed.get(ApiService);
        actions = new ReplaySubject(1);
        called = 0;
    });

    it('should handle the fetch pokemon details action', done => {
        apiServiceMock.getPokemonDetails = jest.fn(() => {
            const response = { body: pokemonResponseMock1 } as HttpResponse<
                PokemonResponse
            >;
            return of(response);
        });

        testee.fetchPokemonDetails$.subscribe(
            (result: FetchPokemonDetailsSuccess | RemoveLoading) => {
                if (result instanceof FetchPokemonDetailsSuccess) {
                    expect(result.type).toEqual(
                        DataActionTypes.FETCH_POKEMON_DETAILS_SUCCESS
                    );
                    expect(result.payload).toEqual(pokemonResponseMock1);

                    called += 1;
                }

                if (result instanceof RemoveLoading) {
                    expect(result.type).toEqual(
                        LayoutActionTypes.REMOVE_LOADING
                    );

                    called += 1;
                }

                if (called === 2) {
                    done();
                }
            }
        );

        actions.next(new FetchPokemonDetails('foo'));
    });

    it('should handle the fetch pokemon details error case', done => {
        apiServiceMock.getPokemonDetails = jest.fn(() => {
            return _throw({ status: 500 });
        });

        testee.fetchPokemonDetails$.subscribe(
            (result: FetchPokemonDetailsError | RemoveLoading) => {
                if (result instanceof FetchPokemonDetailsError) {
                    expect(result.type).toEqual(
                        DataActionTypes.FETCH_POKEMON_DETAILS_ERROR
                    );

                    called += 1;
                }

                if (result instanceof RemoveLoading) {
                    expect(result.type).toEqual(
                        LayoutActionTypes.REMOVE_LOADING
                    );

                    called += 1;
                }

                if (called === 2) {
                    done();
                }
            }
        );

        actions.next(new FetchPokemonDetails('foo'));
    });
});
