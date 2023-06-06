import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
    selector: "app-category-post",
    templateUrl: "./category-post.component.html",
    styleUrls: ["./category-post.component.scss"],
})
export class CategoryPostComponent {

    categoryForm: FormGroup;

    constructor(
        private categoryService: CategoryService,
        private router: Router,
        private fb: FormBuilder
    ) {
        this.categoryForm = this.fb.group({
            name: ['', Validators.required]
        })
    }

    newCategory() {
        this.categoryService
            .postCategory(this.categoryForm.value)
                .subscribe(() => {
                this.categoryService.showMenssage(
                    "Categoria criada com Sucesso."
                );
                this.categoryForm.reset();
                });
    }

    cancel(){
        this.router.navigate(["/categoria"]);
    }
}