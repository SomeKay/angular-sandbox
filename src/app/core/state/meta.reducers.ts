import { ActionReducer, MetaReducer, State } from '@ngrx/store';
import { environment } from 'src/environments/environment';

function logger(reducer: ActionReducer<State<any>>): ActionReducer<State<any>> {
    return (state: State<any>, action: any): State<any> => {
        const now = new Date();
        console.group('State change:', action.type);
        console.log(
            `Time: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`
        );
        console.log('Old state:', state);
        console.log('Payload:', action.payload);

        const newState = reducer(state, action);
        console.log('New state:', newState);
        console.groupEnd();

        return newState;
    };
}

export const metaReducers: MetaReducer<any>[] = environment.production
    ? []
    : [logger];
