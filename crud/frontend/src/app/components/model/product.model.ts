import { Category } from "./category.model";

export interface Product {
    id?: string;
    name: string;
    priceBuy?: number;
    priceSale?: number;
    quantity: number;
    category: Category;
}