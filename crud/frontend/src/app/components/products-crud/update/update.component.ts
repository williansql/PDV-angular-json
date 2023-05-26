import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../../model/product.model";
import { ProductsService } from "../../services/products-service/products.service";


@Component({
    selector: "app-update",
    templateUrl: "./update.component.html",
    styleUrls: ["./update.component.scss"],
})
export class UpdateComponent implements OnInit {
    produto!: Product;

    constructor(
        private router: Router,
        private productsService: ProductsService,
        private route: ActivatedRoute
    ) {}

    prodUpdate() {
        this.productsService.update(this.produto).subscribe(() => {
            this.productsService.showMenssage(
                "Produto atualizado com sucesso!"
            );
            this.router.navigate(["/produtos"]);
        });
    }

    cancel() {
        this.router.navigate(["/produtos"]);
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get("id");
        this.productsService.readById(id!).subscribe((produto) => {
            this.produto = produto;
        });
    }
}
