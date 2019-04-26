import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as layoutReducers from './layout.reducers';

export interface State {
  layout: layoutReducers.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: layoutReducers.reducer
};

export const getSharedState = createFeatureSelector<State>('shared');
