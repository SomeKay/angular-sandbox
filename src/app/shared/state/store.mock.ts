import { Store } from '@ngrx/store';

export const storeMock = ({
    dispatch: jest.fn(),
    pipe: jest.fn()
} as unknown) as Store<any>;
