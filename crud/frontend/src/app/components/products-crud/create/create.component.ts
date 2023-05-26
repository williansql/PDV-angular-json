import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products-service/products.service';
import { CategoryService } from '../../services/category-services/category.service';
import { Category } from '../../model/category.model';


@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {

    produtoForm: FormGroup;
    categories?: Category[];


    constructor(
        private router: Router,
        private productsService: ProductsService,
        private categoryService: CategoryService,
        private fb: FormBuilder) {
            this.produtoForm = this.fb.group({
                name: ['', Validators.required],
                priceBuy: '',
                priceSale: '',
                quantity:'',
                category: ''
            });
        }

    loadCategories(){
        this.categoryService.getCategory().subscribe(categories => {
            this.categories = categories;
        })
    }

    prodCreate() {
        this.productsService.create(this.produtoForm.value).subscribe(() => {
            this.productsService.showMenssage('Produto salvo com sucesso!');
            this.produtoForm.reset();
        });
    }

    cancel() {
        this.router.navigate(['/produtos']);
    }

    onSubmit(){
        console.log(this.produtoForm.value);

    }

    ngOnInit(): void {
        this.loadCategories();
    }
}

