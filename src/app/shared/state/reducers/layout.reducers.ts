import { LayoutActions, LayoutActionTypes } from '../actions/layout.actions';

export interface State {
  loading: number;
}

export const initialState: State = {
  loading: 0
};

export function reducer(
  state: State = initialState,
  action: LayoutActions
): State {
  switch (action.type) {
    case LayoutActionTypes.ADD_LOADING: {
      return {
        ...initialState,
        loading: state.loading + 1
      };
    }

    case LayoutActionTypes.REMOVE_LOADING: {
      return {
        ...initialState,
        loading: state.loading <= 0 ? 0 : state.loading - 1
      };
    }

    default: {
      return state;
    }
  }
}
