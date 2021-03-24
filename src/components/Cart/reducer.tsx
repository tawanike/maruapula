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
            return {...state, products: [...state.products, action.payload]}

        case REMOVE_FROM_CART:
            return {...state, products: state.products.filter(product => product.id !== action.payload)}

        case CHANGE_QUANTITY:
            const index = state.products.findIndex(product => product.id !== action.payload.product);

            const newArray = [...state.products];
            newArray[index].quantity = action.payload.quantity;

            return { ...state, products: newArray}

        default:
            return state;
    }
}