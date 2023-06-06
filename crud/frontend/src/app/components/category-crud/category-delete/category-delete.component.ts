import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/shared/model/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent implements OnInit{
    categories: Category[] = [];
    categoryId!: Category;

    constructor(
        private categoryService: CategoryService,
        private router: Router,
        private route: ActivatedRoute,
    ){}

    deleteCategory(categoria: Category){
        this.categoryService.deleteCategory(this.categoryId.id!).subscribe(category => {
            this.categoryService.showMenssage("Produto deletado com sucesso!");
            this.router.navigate(["/categoria"]);
        })
    }

    loadById(){
        const id = this.route.snapshot.paramMap.get('id')!;
        this.categoryService.getById(id).subscribe((category) => {
            this.categoryId = category;
        });
    }

    cancel(){
        this.router.navigate(["/categoria"]);
    }

    ngOnInit(): void{
        this.loadById();
    }

}
