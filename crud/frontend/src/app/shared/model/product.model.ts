import { Category } from "./category.model";

export interface Product {
    id?: string;
    name: string;
    quantity: number;
    category: string;
}