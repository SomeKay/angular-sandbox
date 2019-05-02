import { HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { of, ReplaySubject, throwError as _throw } from 'rxjs';
import { DataEffects } from 'src/app/pokemon-list/state/effects/data.effects';
import { PokemonListResponse } from 'src/app/shared/models/api/pokemon-list-response';
import { pokemonListResponseMock } from 'src/app/shared/models/api/pokemon-list-response.mock';
import { ApiService } from 'src/app/shared/services/api.service';
import { MockApiService } from 'src/app/shared/services/api.service.mock';
import {
    LayoutActionTypes,
    RemoveLoading
} from 'src/app/shared/state/actions/layout.actions';
import {
    DataActionTypes,
    FetchPokemonList,
    FetchPokemonListError,
    FetchPokemonListSuccess
} from '../actions/data.actions';

describe('pokemonList.DataEffects', () => {
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

    it('should handle the fetch pokemon list action', done => {
        apiServiceMock.getPokemonList = jest.fn(() => {
            const response = { body: pokemonListResponseMock } as HttpResponse<
                PokemonListResponse
            >;
            return of(response);
        });

        testee.fetchPokemonList$.subscribe(
            (result: FetchPokemonListSuccess | RemoveLoading) => {
                if (result instanceof FetchPokemonListSuccess) {
                    expect(result.type).toEqual(
                        DataActionTypes.FETCH_POKEMON_LIST_SUCCESS
                    );
                    expect(result.payload).toEqual(pokemonListResponseMock);

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

        actions.next(new FetchPokemonList());
    });

    it('should handle the fetch pokemon list error case', done => {
        apiServiceMock.getPokemonList = jest.fn(() => {
            return _throw({ status: 500 });
        });

        testee.fetchPokemonList$.subscribe(
            (result: FetchPokemonListError | RemoveLoading) => {
                if (result instanceof FetchPokemonListError) {
                    expect(result.type).toEqual(
                        DataActionTypes.FETCH_POKEMON_LIST_ERROR
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

        actions.next(new FetchPokemonList());
    });
});
