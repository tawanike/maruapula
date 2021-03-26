import { createContext, useReducer, Dispatch,useEffect } from 'react';
import reducer, { Action} from './reducer';
import { updateCartPrice } from './actions';
import { ICart } from './constants';

export interface InitContextProps {
    state: ICart,
    dispatch: Dispatch<Action>,
}

const initialState = {
    subtotal: 0,
    serviceFee: 50.00,
    products: [],
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
            subtotal += (product.quantity * product.price)
        })
        dispatch(updateCartPrice(subtotal));

        const localCart = window.localStorage.getItem('_maruaCart');
        if(localCart) {
            console.log('GET_LOCAL_CART');
            console.log('SAVE CART TO LOCAL STORAGE');
        } else {
            console.log('CREATE LOCAL CART');
            console.log('SAVE CART TO LOCAL STORAGE');
        }
        
    }, [state.products])

return (
    <CartContext.Provider value={{ state, dispatch }}>
        {props.children}
    </CartContext.Provider>
);
};

export default CartContextProvider;