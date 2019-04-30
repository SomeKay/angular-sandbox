import { AddLoading, RemoveLoading } from '../actions/layout.actions';
import { storeMock } from '../store.mock';
import { SharedStateService } from './shared-state.service';

describe('shared.SharedStateService', () => {
    let testee: SharedStateService;

    beforeEach(() => {
        testee = new SharedStateService(storeMock);
    });

    it('should dispatch AddLoading action', () => {
        const action = new AddLoading();
        storeMock.dispatch = jest.fn();
        testee.addLoading();

        expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch RemoveLoading action', () => {
        const action = new RemoveLoading();
        storeMock.dispatch = jest.fn();
        testee.removeLoading();

        expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });

    it('should provide the layout part of the state', () => {
        storeMock.pipe = jest.fn().mockReturnValue('foo');
        expect(testee.getLayoutState()).toEqual('foo');
    });
});
