import { TOGGLE_CART_DRAWER, ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY } from './constants';

export function toggleCartDrawer(data: boolean) {
    return {
      type: TOGGLE_CART_DRAWER,
      payload: data,
    };
  }

export function addToCart(data: any) {
  return {
    type: ADD_TO_CART,
    payload: {
      id: data.product.id,
      title: data.product.title,
      image: data.product.image,
      price: data.product.price,
      promo_price: data.product.promo_price,
      size: data.product.size,
      category: data.product.category,
      quanity: data.quanity,
    },
  };
}

export function removeFromCart(data: any) {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
}

export function changeQuantity(data: any) {
  return {
    type: CHANGE_QUANTITY,
    payload: data,
  };
}