import { TOGGLE_CART_DRAWER, ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from './constants';

export function toggleCartDrawer(data: boolean) {
    return {
      type: TOGGLE_CART_DRAWER,
      payload: data,
    };
  }