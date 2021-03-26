import { FETCH_PRODUCTS, FILTER_PRODUCTS } from './constants';

export function getProducts(data: any[]) {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  };
}

export function filterProducts(data: string) {
  return {
    type: FILTER_PRODUCTS,
    payload: data,
  };
}

