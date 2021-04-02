export const CHANGE_PAGE = 'app/Products/CHANGE_PAGE';
export const FETCH_PRODUCTS = 'app/Products/FETCH_PRODUCTS';
export const FILTER_PRODUCTS = 'app/Products/FILTER_PRODUCTS';
export const SELECTED_CATEGORY = 'app/Products/SELECTED_CATEGORY';


export interface IProduct { 
    products: any[];
    category: string;
    selectedProducts: any[];
    page: number;
    children: React.ReactChildren;
}