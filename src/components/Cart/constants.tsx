export const TOGGLE_CART_DRAWER = 'app/Cart/TOGGLE_CART_DRAWER';
export const ADD_TO_CART = 'app/Cart/ADD_TO_CART';
export const REMOVE_FROM_CART = 'app/Cart/REMOVE_FROM_CART';
export const CHANGE_QUANTITY = 'app/Cart/CHANGE_QUANTITY';
export const UPDATE_CART_PRICE = 'app/Cart/UPDATE_CART_PRICE';

export interface ICart { 
    subtotal: number;
    serviceFee: number;
    products: any[];
    drawer: {
        visible: boolean
    };
    children: React.ReactChildren;
}