import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
    ADD_LOADING = '[LAYOUT] Add loading',
    REMOVE_LOADING = '[LAYOUT] Remove loading'
}

export class AddLoading implements Action {
    readonly type = LayoutActionTypes.ADD_LOADING;
}

export class RemoveLoading implements Action {
    readonly type = LayoutActionTypes.REMOVE_LOADING;
}

export type LayoutActions = AddLoading | RemoveLoading;
