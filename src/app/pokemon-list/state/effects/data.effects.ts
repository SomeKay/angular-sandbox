import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';
import { RemoveLoading } from 'src/app/shared/state/actions/layout.actions';
import {
    DataActionTypes,
    FetchPokemonListError,
    FetchPokemonListSuccess
} from '../actions/data.actions';

@Injectable()
export class DataEffects {
    constructor(private actions$: Actions, private apiService: ApiService) {}

    @Effect()
    fetchPokemonList$: Observable<Action> = this.actions$.pipe(
        ofType(DataActionTypes.FETCH_POKEMON_LIST),
        mergeMap(() =>
            this.apiService.getPokemonList().pipe(
                switchMap(data => [
                    new FetchPokemonListSuccess(data.body),
                    new RemoveLoading()
                ]),
                catchError(httpErrorResponse => {
                    console.log(httpErrorResponse);

                    return [new FetchPokemonListError(), new RemoveLoading()];
                })
            )
        )
    );
}
