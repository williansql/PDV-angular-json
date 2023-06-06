import { Product } from './product.model';
export interface Entrada {
    id: string;
    product: Product;
    tombo: string;
    nserie: string;
    observation: string;
    origen: string;
    quantity: number;
    dateEntry: Date;
}