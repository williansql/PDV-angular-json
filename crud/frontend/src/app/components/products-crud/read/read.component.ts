import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/model/category.model';
import { Product } from 'src/app/shared/model/product.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
    selector: "app-read",
    templateUrl: "./read.component.html",
    styleUrls: ["./read.component.scss"],
})
export class ReadComponent implements OnInit {
    produtos: Product[] = [];
    categories: Category[] = [];
    orderByName: boolean = false;
    orderByCategory: boolean = false;
    paginaAtual = 1;
    itensPorPagina = 7;
    totalItens = 0;
    disabledButton: boolean = false;
    totalPages!: number;
    gambiarra = 0;

    constructor(
        private productService: ProductsService,
        private categoryService: CategoryService,
        private router: Router
    ) {}

    orderProduct() {
        this.orderByName = !this.orderByName;
        if (this.produtos) {
            this.produtos.sort((a, b) => {
                const compareResult = a.name.localeCompare(b.name);
                return this.orderByName ? compareResult : -compareResult;
            });
        }
    }

    orderCategory() {
        this.orderByCategory = !this.orderByCategory;
        if (this.produtos) {
            this.produtos.sort((a, b) => {
                const categoryA = this.getCategoryName(a.category);
                const categoryB = this.getCategoryName(b.category);
                const compareResult = categoryA.localeCompare(categoryB);
                return this.orderByCategory ? compareResult : -compareResult;
            });
        }
    }

    loadCategories() {
        this.categoryService.getCategory().subscribe((categories) => {
            this.categories = categories;
        });
    }
    loadProducts() {
        this.productService.productGet().subscribe((products) => {
            this.totalItens = products.length;
            const startIndex = (this.paginaAtual - 1) * this.itensPorPagina;
            const endIndex = startIndex + this.itensPorPagina;
            this.produtos = products.slice(startIndex, endIndex);
            if(this.gambiarra == 0)this.changePage(0);
            this.gambiarra = this.gambiarra + 1;
        });
    }

    get totalPaginas(): number {
        return Math.ceil(this.totalItens / this.itensPorPagina);
    }

    changePage(step: number, skip?: boolean) {
        const nextPage = this.paginaAtual + step;
        const totalPages = Math.ceil(this.totalItens / this.itensPorPagina);
        if (nextPage >= 1 && nextPage <= totalPages) {
            this.paginaAtual = nextPage;
            this.loadProducts();
        }
        this.totalPages = totalPages;

        console.log(this.totalItens);

    }



    getCategoryName(categoryId: string): string {
        const category = this.categories.find(
            (category) => category.id === categoryId
        );
        return category ? category.name : "";
    }

    updateProduct() {
        this.router.navigate(["/editar-produto"]);
    }

    ngOnInit() {
        this.loadCategories();
        this.loadProducts();
    }
}
