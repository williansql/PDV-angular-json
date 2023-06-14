import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-products-crud",
    templateUrl: "./products-crud.component.html",
    styleUrls: ["./products-crud.component.scss"],
})
export class ProductsCrudComponent {
    constructor(private router: Router) {}


    prodCreate() {
        this.router.navigate(["/criar-produto"]);
    }
}
