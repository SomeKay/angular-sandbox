import { Action } from '@ngrx/store';
import { PokemonListResponse } from '../../../shared/models/api/pokemon-list-response';

export enum DataActionTypes {
    FETCH_POKEMON_LIST = '[LIST] Fetch Pokemon list',
    FETCH_POKEMON_LIST_SUCCESS = '[LIST] Fetch Pokemon list success',
    FETCH_POKEMON_LIST_ERROR = '[LIST] Fetch Pokemon list error'
}

export class FetchPokemonList implements Action {
    readonly type = DataActionTypes.FETCH_POKEMON_LIST;

    constructor(public payload?: string) {}
}

export class FetchPokemonListSuccess implements Action {
    readonly type = DataActionTypes.FETCH_POKEMON_LIST_SUCCESS;

    constructor(public payload: PokemonListResponse) {}
}

export class FetchPokemonListError implements Action {
    readonly type = DataActionTypes.FETCH_POKEMON_LIST_ERROR;
}

export type DataActions =
    | FetchPokemonList
    | FetchPokemonListSuccess
    | FetchPokemonListError;
