import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/model/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductsService } from 'src/app/shared/services/products.service';


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
                category: ''
            });
        }

    orderCategory(){
        if (this.categories) {
            this.categories.sort((a, b) => {
                if (a.name < b.name){
                    return -1;
                }else if(a.name > b.name) {
                    return 1;
                }else{
                    return 0;
                }
            });
        }
    }

    loadCategories(){
        this.categoryService.getCategory().subscribe(categories => {
            this.categories = categories;
            this.orderCategory();
        })
    }

    prodCreate() {
        this.productsService.productPost(this.produtoForm.value).subscribe(() => {
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

