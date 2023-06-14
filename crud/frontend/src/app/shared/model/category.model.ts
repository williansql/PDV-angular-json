import { Product } from "./product.model";
import { SubCategory } from "./sub-category";

export interface Category {
    id?: string;
    name: string;
    subCategory: SubCategory;

}