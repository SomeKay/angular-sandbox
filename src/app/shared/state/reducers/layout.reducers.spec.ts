import { AddLoading, RemoveLoading } from '../actions/layout.actions';
import * as layoutReducers from './layout.reducers';

describe('shared.LayoutReducers', () => {
    it('should have initial state', () => {
        expect(layoutReducers.initialState).toEqual({
            loading: 0
        });
    });

    it('should allow adding to loading', () => {
        const action = new AddLoading();
        const initialState = { ...layoutReducers.initialState, loading: 5 };
        const state = layoutReducers.reducer(initialState, action);

        expect(state.loading).toBe(6);
    });

    it('should allow removing from loading', () => {
        const action = new RemoveLoading();
        const initialState = { ...layoutReducers.initialState, loading: 5 };
        const state = layoutReducers.reducer(initialState, action);

        expect(state.loading).toBe(4);
    });

    it('should not allow removing from loading if loading is already at zero', () => {
        const action = new RemoveLoading();
        const initialState = { ...layoutReducers.initialState, loading: 0 };
        const state = layoutReducers.reducer(initialState, action);

        expect(state.loading).toBe(0);
    });

    it('should return default state if action is not recognized', () => {
        const action: any = { foo: 'bar' };
        const state = layoutReducers.reducer(
            layoutReducers.initialState,
            action
        );

        expect(state).toEqual(layoutReducers.initialState);
    });
});
