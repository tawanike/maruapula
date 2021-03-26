import { FETCH_PRODUCTS, FILTER_PRODUCTS  } from './constants';

export interface Action {
    type: string,
    payload: any
}


// import logger from 'utils/logger';
export default function reducer(state: any, action: Action) {
    console.log(action);
    switch (action.type) {
        case FETCH_PRODUCTS:
            return Object.assign({}, state, { products: action.payload });

        case FILTER_PRODUCTS:
            return Object.assign({}, state, { subtotal: action.payload });

 

        default:
            return state;
    }
}