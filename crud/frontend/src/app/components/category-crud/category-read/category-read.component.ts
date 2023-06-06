import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/model/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
    selector: "app-category-read",
    templateUrl: "./category-read.component.html",
    styleUrls: ["./category-read.component.scss"],
})
export class CategoryReadComponent {
    categories: Category[] = [];
    orderByCategory: boolean = false;

    pageActual = 1;
    itemsPerPage = 7;
    allItems = 0;
    disableButton = false;
    totalPages!: number;
    gambiarra = 0;

    constructor(
        private categoryService: CategoryService,
        private router: Router) {}


    loadCategory(){
        this.categoryService.getCategory().subscribe((category) => {
            this.allItems = category.length;
            const startIndex = (this.pageActual - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            this.categories = category.slice(startIndex, endIndex);
            if (this.gambiarra === 0){
                this.changePage(0);
            }
            this.gambiarra +=1;
        });
    }

    orderCategory(){
        this.orderByCategory = !this.orderByCategory;
        if (this.categories) {
            this.categories.sort((a, b) => {
                const compareResult = a.name.localeCompare(b.name);
                return this.orderByCategory ? compareResult : -compareResult;
            });
        }
    }

    get totalPage(){
        return Math.ceil(this.allItems / this.itemsPerPage);
    }

    changePage(step: number) {
        const nextPage = this.pageActual + step;
        const totalPages = Math.ceil(this.allItems / this.itemsPerPage);
        if ( nextPage >= 1 && nextPage <= totalPages) {
            this.pageActual = nextPage;
            this.loadCategory();
        }
        this.totalPages = totalPages;
    }

    ngOnInit() {
        this.loadCategory();
    }

}

