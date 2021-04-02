import { FETCH_PRODUCTS, FILTER_PRODUCTS, SELECTED_CATEGORY, CHANGE_PAGE  } from './constants';

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
            return Object.assign({}, state, { selectedProducts: action.payload });

        case SELECTED_CATEGORY:
            return Object.assign({}, state, { category: action.payload });

        case CHANGE_PAGE:
            return Object.assign({}, state, { page: action.payload });
        default:
            return state;
    }
}