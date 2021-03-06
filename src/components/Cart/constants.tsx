export const ADD_TO_CART = 'app/Cart/ADD_TO_CART';
export const CHANGE_QUANTITY = 'app/Cart/CHANGE_QUANTITY';
export const REMOVE_FROM_CART = 'app/Cart/REMOVE_FROM_CART';
export const UPDATE_CART_COUNT= 'app/Cart/UPDATE_CART_COUNT';
export const UPDATE_CART_PRICE = 'app/Cart/UPDATE_CART_PRICE';
export const TOGGLE_CART_DRAWER = 'app/Cart/TOGGLE_CART_DRAWER';
export const REMOVE_ALL_FROM_CART = 'app/Cart/REMOVE_ALL_FROM_CART';
export interface ICart { 
    subtotal: number;
    count: number;
    serviceFee: number;
    products: any[];
    drawer: {
        visible: boolean
    };
    children: React.ReactChildren;
}