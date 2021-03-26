export const FETCH_PRODUCTS = 'app/Products/FETCH_PRODUCTS';
export const FILTER_PRODUCTS = 'app/Products/FILTER_PRODUCTS';

export interface ICart { 
    products: any[];
    category: string;
    children: React.ReactChildren;
}