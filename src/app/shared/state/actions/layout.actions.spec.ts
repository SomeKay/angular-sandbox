import { AddLoading, LayoutActionTypes, RemoveLoading } from './layout.actions';

describe('shared.LayoutActionTypes', () => {
    it('should create AddLoading Action', () => {
        const action: AddLoading = new AddLoading();

        expect(action.type).toBe(LayoutActionTypes.ADD_LOADING);
    });

    it('should create RemoveLoading Action', () => {
        const action: RemoveLoading = new RemoveLoading();

        expect(action.type).toBe(LayoutActionTypes.REMOVE_LOADING);
    });
});
