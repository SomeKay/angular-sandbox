import { Action } from '@ngrx/store';
import { Pokemon } from 'src/app/shared/models/pokemon';

export enum DataActionTypes {
    FETCH_POKEMON_DETAILS = '[DETAILS] Fetch Pokemon details',
    FETCH_POKEMON_DETAILS_SUCCESS = '[DETAILS] Fetch Pokemon details success',
    FETCH_POKEMON_DETAILS_ERROR = '[DETAILS] Fetch Pokemon details error'
}

export class FetchPokemonDetails implements Action {
    readonly type = DataActionTypes.FETCH_POKEMON_DETAILS;

    constructor(public payload: string) {}
}

export class FetchPokemonDetailsSuccess implements Action {
    readonly type = DataActionTypes.FETCH_POKEMON_DETAILS_SUCCESS;

    constructor(public payload: Pokemon) {}
}

export class FetchPokemonDetailsError implements Action {
    readonly type = DataActionTypes.FETCH_POKEMON_DETAILS_ERROR;
}

export type DataActions =
    | FetchPokemonDetails
    | FetchPokemonDetailsSuccess
    | FetchPokemonDetailsError;
