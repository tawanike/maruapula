import { createContext, useReducer, Dispatch } from 'react';
import reducer, { Action} from './reducer';
import { ICart } from './constants';

export interface InitContextProps {
    state: ICart,
    dispatch: Dispatch<Action>,
}

const initialState = {
    products: [],
    drawer: {
        visible: false
    },
} 

export const CartContext = createContext({} as InitContextProps);

const CartContextProvider: React.FC = ( props: any ) => {
    const [state, dispatch] = useReducer( reducer, initialState);

return (
    <CartContext.Provider value={{ state, dispatch }}>
        {props.children}
    </CartContext.Provider>
);
};

export default CartContextProvider;