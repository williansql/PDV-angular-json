import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/model/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { SubCategoryService } from 'src/app/shared/services/sub-category.service';

@Component({
    selector: "app-sub-cat-post",
    templateUrl: "./sub-cat-post.component.html",
    styleUrls: ["./sub-cat-post.component.scss"],
})
export class SubCatPostComponent {
    subCategoryForm: FormGroup;
    categories?: Category[];

    constructor(
        private router: Router,
        private subCategoryService: SubCategoryService,
        private categoryService: CategoryService,
        private fb: FormBuilder
    ) {
        this.subCategoryForm = this.fb.group({
            name: ["", Validators.required],
            category: "",
        });
    }

    orderCategory() {
        if (this.categories) {
            this.categories.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
    }

    loadCategories() {
        this.categoryService.getCategory().subscribe((categories) => {
            this.categories = categories;
            this.orderCategory();
        });
    }

    newSubCategory() {
        this.subCategoryService
            .subPost(this.subCategoryForm.value)
            .subscribe(() => {
                this.subCategoryForm.reset();
            });
    }

    cancel() {
        this.router.navigate(["/produtos"]);
    }

    onSubmit() {
        console.log(this.subCategoryForm.value);
    }

    ngOnInit(): void {
        this.loadCategories();
    }
}

