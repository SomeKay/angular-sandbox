import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as layoutActions from '../actions/layout.actions';
import * as sharedReducers from '../reducers';
import * as layoutReducers from '../reducers/layout.reducers';

@Injectable({
    providedIn: 'root'
})
export class SharedStateService {
    constructor(private store: Store<sharedReducers.State>) {}

    addLoading(): void {
        this.store.dispatch(new layoutActions.AddLoading());
    }

    removeLoading(): void {
        this.store.dispatch(new layoutActions.RemoveLoading());
    }

    getLayoutState(): Observable<layoutReducers.State> {
        return this.store.pipe(
            select(sharedReducers.getSharedState),
            map(shared => shared.layout)
        );
    }
}
