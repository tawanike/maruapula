import { createContext, useReducer, Dispatch,useEffect } from 'react';
import reducer, { Action} from './reducer';
import { IBanner } from './constants';

export interface InitContextProps {
    state: IBanner,
    dispatch: Dispatch<Action>,
}

const initialState = {
    banners: [],
} 

export const BannersContext = createContext({} as InitContextProps);

const BannersContextProvider: React.FC = ( props: any ) => {
    
    const [state, dispatch] = useReducer( reducer, initialState);

return (
    <BannersContext.Provider value={{ state, dispatch }}>
        {props.children}
    </BannersContext.Provider>
);
};

export default BannersContextProvider;