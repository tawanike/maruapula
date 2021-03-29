import { createContext, useReducer, Dispatch,useEffect } from 'react';
import reducer, { Action} from './reducer';
import { updateCartPrice, emptyCart, removeFromCart, updateCartCount } from './actions';
import { ICart } from './constants';

export interface InitContextProps {
    state: ICart,
    dispatch: Dispatch<Action>,
}

const initialState = {
    subtotal: 0,
    serviceFee: 50.00,
    products: [],
    count: 0,
    drawer: {
        visible: false
    },
} 

export const CartContext = createContext({} as InitContextProps);

const CartContextProvider: React.FC = ( props: any ) => {
    
    const [state, dispatch] = useReducer( reducer, initialState);

    useEffect(() => {
        let subtotal = 0;
        
        state.products.map((product) => {
            subtotal += (product.quantity * product.price);
        });

        dispatch(updateCartPrice(subtotal));


        const localCart = window.localStorage.getItem('_maruaCart');

    }, [state.products]);

    useEffect(() => {
        

        if (state.subtotal === 0) {
            console.log('SUBTOTAL IS ZERO')
            dispatch(emptyCart());
        };

        state.products.map((product) => {
            if (product.quantity === 0){
                dispatch(removeFromCart(product.id))
            }
        });

        
    }, [state.subtotal]);

return (
    <CartContext.Provider value={{ state, dispatch }}>
        {props.children}
    </CartContext.Provider>
);
};

export default CartContextProvider;