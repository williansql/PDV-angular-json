import { Component } from "@angular/core";
import { Product } from "../../../shared/model/product.model";
import { Category } from "src/app/shared/model/category.model";

@Component({
    selector: "app-entrada-read",
    templateUrl: "./entrada-read.component.html",
    styleUrls: ["./entrada-read.component.scss"],
})
export class EntradaReadComponent {
    produtos: Product[] = [];
    category?: Category;

    constructor(){}
}
