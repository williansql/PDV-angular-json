import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/model/category.model';
import { CategoryService } from '../../../shared/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-category-put',
  templateUrl: './category-put.component.html',
  styleUrls: ['./category-put.component.scss']
})
export class CategoryPutComponent implements OnInit {
    categories: Category[] = [];
    categoryId!: Category

    constructor(
        private categoryService: CategoryService,
        private router: Router,
        private route: ActivatedRoute,
    ){}

    categoryUpdate(){
        this.categoryService.updateCategory(this.categoryId).subscribe((category) => {
            this.categoryService.showMenssage("Produto atualizado com sucesso!");
            this.router.navigate(["/categoria"]);
        });
    }

    orderCategory(){
        if(this.categories){
            this.categories.sort((a, b) => {
                if (a.name < b.name){
                    return -1;
                }else if (a.name > b.name){
                    return 1;
                }else{
                    return 0;
                }
            })
        }
    }

    loadCategory(){
        this.categoryService.getCategory().subscribe((category) => {
            this.categories = category;
            this.orderCategory();
        })
    }

    loadById(){
        const id = this.route.snapshot.paramMap.get("id")!;
        this.categoryService.getById(id).subscribe((category) => {
            this.categoryId = category;
        })
    }

    cancel(){
        this.router.navigate(["/categoria"]);
    }

    ngOnInit(): void {
        this.loadById();
        this.loadCategory();
    }



}
