import { find } from 'lodash';
import { 
    TOGGLE_CART_DRAWER, ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY, 
    UPDATE_CART_PRICE, REMOVE_ALL_FROM_CART, UPDATE_CART_COUNT
} from './constants';

export interface Action {
    type: string,
    payload: any
}


// import logger from 'utils/logger';
export default function reducer(state: any, action: Action) {
    console.log(action);
    switch (action.type) {
        case TOGGLE_CART_DRAWER:
            return Object.assign({}, state, { drawer: { visible: action.payload }});

        case UPDATE_CART_PRICE:
            return Object.assign({}, state, { subtotal: action.payload });

        case ADD_TO_CART:
            const product = find(state.products, {id: action.payload.id});
            if (product) {
                return {...state,
                    products: state.products.map(product => {
                        // If this isn's the product we are looking for return the product
                        if(product.id !== action.payload.id) {
                            return product;
                        }
                        return {
                            ...product,
                            quantity: action.payload.quantity
                        }
                    })
                };
            } else {
                return {...state, products: [...state.products, action.payload]};
            };

        case REMOVE_FROM_CART:
            return {...state, products: state.products.filter(product => product.id !== action.payload)};

        case REMOVE_ALL_FROM_CART:
            return {...state, products: []};

        case UPDATE_CART_COUNT:
            return { ...state, count: action.payload };
            
        case CHANGE_QUANTITY:
            return {...state,
                products: state.products.map(product => {
                    // If this isn's the product we are looking for return the product
                    if(product.id !== action.payload.product) {
                        return product;
                    }

                    // if (action.payload.quantity > 0) {
                    //     return product;
                    // }

                    return {
                        ...product,
                        quantity: action.payload.quantity
                    }
                })
            };

        default:
            return state;
    };
};
