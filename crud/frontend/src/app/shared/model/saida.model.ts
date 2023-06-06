import { Product } from "./product.model";

export interface Saida {
    id: string;
    product: Product;
    tombo: string;
    nserie: string;
    observation: string;
    origen: string;
    quantity: number;
    dateExit: Date;
}