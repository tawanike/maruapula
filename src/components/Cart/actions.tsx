import { TOGGLE_CART_DRAWER, ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY, UPDATE_CART_PRICE } from './constants';

export function toggleCartDrawer(data: boolean) {
  return {
    type: TOGGLE_CART_DRAWER,
    payload: data,
  };
}

export function updateCartPrice(data: any) {
  return {
    type: UPDATE_CART_PRICE,
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
      quantity: data.quantity,
    },
  };
}

export function removeFromCart(product: string) {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
}

export function changeQuantity(product: string, quantity: number) {
  return {
    type: CHANGE_QUANTITY,
    payload: {product, quantity},
  };
}
