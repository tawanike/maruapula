import { FETCH_BANNERS  } from './constants';

export interface Action {
    type: string,
    payload: any
}


// import logger from 'utils/logger';
export default function reducer(state: any, action: Action) {
    console.log(action);
    switch (action.type) {
        case FETCH_BANNERS:
            return Object.assign({}, state, { banners: action.payload });

        default:
            return state;
    }
}