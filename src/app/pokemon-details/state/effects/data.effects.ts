import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';
import { RemoveLoading } from 'src/app/shared/state/actions/layout.actions';
import {
    DataActionTypes,
    FetchPokemonDetails,
    FetchPokemonDetailsError,
    FetchPokemonDetailsSuccess
} from '../actions/data.actions';

@Injectable()
export class DataEffects {
    constructor(private actions$: Actions, private apiService: ApiService) {}

    @Effect()
    fetchPokemonDetails$: Observable<Action> = this.actions$.pipe(
        ofType(DataActionTypes.FETCH_POKEMON_DETAILS),
        mergeMap((action: FetchPokemonDetails) =>
            this.apiService.getPokemonDetails(action.payload).pipe(
                switchMap(data => [
                    new FetchPokemonDetailsSuccess(data.body),
                    new RemoveLoading()
                ]),
                catchError(() => {
                    return [
                        new FetchPokemonDetailsError(),
                        new RemoveLoading()
                    ];
                })
            )
        )
    );
}
