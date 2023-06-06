import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: "app-category-crud",
    templateUrl: "./category-crud.component.html",
    styleUrls: ["./category-crud.component.scss"],
})
export class CategoryCrudComponent {

    constructor(
        private router: Router
    ) {}

    newCategory(){
        this.router.navigate(["/criar-catergoria"]);
    }

}

