import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from '../../views/products/products-service/products.service';

@Component({
    selector: "app-create",
    templateUrl: "./create.component.html",
    styleUrls: ["./create.component.scss"],
})
export class CreateComponent {

    produtoForm: FormGroup;


    constructor(
        private router: Router,
        private productsService: ProductsService,
        private fb: FormBuilder) {
            this.produtoForm = this.fb.group({
                name: ['', Validators.required],
                price: '',
                category: '',
            });
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
}

