import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../views/products/products-service/products.service';
import { Product } from '../../views/products/product.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit{

    produtos: Product[] = [];
    displayedColumns = ['id', 'name', 'price', 'action'];

    constructor(private productService: ProductsService){ }

    ngOnInit(){
        this.productService.read().subscribe(
            produtos => {this.produtos = produtos
                console.log(produtos);

        });
    }

}
