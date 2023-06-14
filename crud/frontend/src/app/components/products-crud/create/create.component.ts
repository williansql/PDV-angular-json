import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubCategory } from 'src/app/shared/model/sub-category';
import { ProductsService } from 'src/app/shared/services/products.service';

import { SubCategoryService } from '../../../shared/services/sub-category.service';


@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {

    produtoForm: FormGroup;
    subCategory?: SubCategory[];


    constructor(
        private router: Router,
        private productsService: ProductsService,
        private subCategoryService: SubCategoryService,
        private fb: FormBuilder) {
            this.produtoForm = this.fb.group({
                name: ['', Validators.required],
                subCategory: ''
            });
        }

    orderCategory(){
        if (this.subCategory) {
            this.subCategory.sort((a, b) => {
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

    loadSubCategories(){
        this.subCategoryService.subGet().subscribe(subCategory => {
            this.subCategory = subCategory;
            this.orderCategory();
        })
    }

    prodCreate() {
        this.productsService.productPost(this.produtoForm.value).subscribe(() => {
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
        this.loadSubCategories();
    }
}

