import { TOGGLE_CART_DRAWER, ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from './constants';

export interface Action {
    type: string,
    payload: any
}


// import logger from 'utils/logger';
export default function (state: any, action: Action) {
    // logger(action);
    switch (action.type) {
        case TOGGLE_CART_DRAWER:
            return Object.assign({}, state, { drawer: { visible: action.payload }});

        case ADD_TO_CART:
            return Object.assign({}, state, { isLoggedIn: action.payload });

        case REMOVE_FROM_CART:
            return Object.assign({}, state, { profile: action.payload.createdUser, isLoggedIn: action.payload.isLoggedIn });

        case CHANGE_QUANTITY:
            return Object.assign({}, state, { profile: action.payload.createdUser, isLoggedIn: action.payload.isLoggedIn });

            
        default:
            return state;
    }
}