import { createContext, useReducer, Dispatch,useEffect } from 'react';
import reducer, { Action} from './reducer';
import { getProducts } from './actions';
import { IProduct } from './constants';

export interface InitContextProps {
    state: IProduct,
    dispatch: Dispatch<Action>,
}

const initialState = {
    products: [],
    selectedProducts: [],
    category: 'Fruits',
    page: 1
} 

export const ProductContext = createContext({} as InitContextProps);

const ProductContextProvider: React.FC = ( props: any ) => {
    
    const [state, dispatch] = useReducer( reducer, initialState);

    useEffect(() => {
        
    }, [state.products])

return (
    <ProductContext.Provider value={{ state, dispatch }}>
        {props.children}
    </ProductContext.Provider>
);
};

export default ProductContextProvider;