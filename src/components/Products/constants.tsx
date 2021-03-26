export const FETCH_PRODUCTS = 'app/Products/FETCH_PRODUCTS';
export const FILTER_PRODUCTS = 'app/Products/FILTER_PRODUCTS';
export const SELECTED_CATEGORY = 'app/Products/SELECTED_CATEGORY';

export interface IProduct { 
    products: any[];
    category: string;
    selectedProducts: any[];
    children: React.ReactChildren;
}