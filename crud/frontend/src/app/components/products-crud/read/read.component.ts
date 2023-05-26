import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductsService } from '../../services/products-service/products.service';

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
