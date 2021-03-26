import { FETCH_PRODUCTS, FILTER_PRODUCTS, SELECTED_CATEGORY } from './constants';

export function getProducts(data: any[]) {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  };
}

export function filterProducts(data: any[]) {
  return {
    type: FILTER_PRODUCTS,
    payload: data,
  };
}

export function selectedCategory(data: string[]) {
  return {
    type: SELECTED_CATEGORY,
    payload: data,
  };
}