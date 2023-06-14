import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Category } from "src/app/shared/model/category.model";
import { Product } from "src/app/shared/model/product.model";
import { CategoryService } from "src/app/shared/services/category.service";
import { ProductsService } from "src/app/shared/services/products.service";


@Component({
    selector: "app-update",
    templateUrl: "./update.component.html",
    styleUrls: ["./update.component.scss"],
})
export class UpdateComponent implements OnInit {
    produto!: Product;
    categories: Category[] = [];
    selectCategoryId!: string;
    product: Product[] = [];

    constructor(
        private router: Router,
        private productsService: ProductsService,
        private categoryService: CategoryService,
        private route: ActivatedRoute
    ) {}

    productUpdate() {
        this.produto.category = this.selectCategoryId;
        this.productsService.productPut(this.produto).subscribe((prod) => {
            console.log(prod);
            this.router.navigate(["/produtos"]);
        });
    }

    orderCategory() {
        if (this.categories) {
            this.categories.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
    }

    loadCategories() {
        this.categoryService.getCategory().subscribe((category) => {
            this.categories = category;
            this.orderCategory();
        });
    }

    loadById() {
        const id = this.route.snapshot.paramMap.get("id")!;
        this.productsService.getById(id).subscribe((produto) => {
            this.produto = produto;
        });
    }

    cancel() {
        this.router.navigate(["/produtos"]);
    }

    ngOnInit() {
        this.loadById();
        this.loadCategories();
    }
}
