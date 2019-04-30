import { AddLoading, RemoveLoading } from '../actions/layout.actions';
import { storeMock } from '../store.mock';
import { SharedStateService } from './shared-state.service';

describe('shared.SharedStateService', () => {
    let sharedStateService: SharedStateService;

    beforeEach(() => {
        sharedStateService = new SharedStateService(storeMock);
    });

    it('should dispatch AddLoading action', () => {
        const action = new AddLoading();
        sharedStateService.addLoading();

        expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch RemoveLoading action', () => {
        const action = new RemoveLoading();
        sharedStateService.removeLoading();

        expect(storeMock.dispatch).toHaveBeenCalledWith(action);
    });

    it('should provide the layout part of the state', () => {
        storeMock.pipe = jest.fn().mockReturnValue('foo');
        expect(sharedStateService.getLayoutState()).toEqual('foo');
    });
});
