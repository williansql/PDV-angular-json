import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../views/products/products-service/products.service';
import { Product } from '../../views/products/product.model';

@Component({
    selector: "app-delete",
    templateUrl: "./delete.component.html",
    styleUrls: ["./delete.component.scss"],
})
export class DeleteComponent implements OnInit{
    produto!: Product;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private productsService: ProductsService,){}

    deleteProd(produto: Product){
        this.productsService.delete(this.produto.id!).subscribe(produto => {
            this.productsService.showMenssage('Produto deletado com sucesso!');
            this.router.navigate(['/produtos'])
        })
    }

    cancel(){
        this.router.navigate(['/produtos']);
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.productsService.readById(id!).subscribe((produto) => {
            this.produto = produto;
        });
    }
}
