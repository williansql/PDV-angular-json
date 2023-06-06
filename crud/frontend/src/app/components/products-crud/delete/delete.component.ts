import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';

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
        this.productsService.productDelete(this.produto.id!).subscribe(produto => {
            this.productsService.showMenssage('Produto deletado com sucesso!');
            this.router.navigate(['/produtos']);
        });
    }

    cancel(){
        this.router.navigate(['/produtos']);
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.productsService.getById(id!).subscribe((produto) => {
            this.produto = produto;
        });
    }
}
