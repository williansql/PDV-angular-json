import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryCrudComponent } from './components/category-crud/category-crud.component';
import { CategoryDeleteComponent } from './components/category-crud/category-delete/category-delete.component';
import { CategoryPostComponent } from './components/category-crud/category-post/category-post.component';
import { CategoryPutComponent } from './components/category-crud/category-put/category-put.component';
import { CreateComponent } from './components/products-crud/create/create.component';
import { DeleteComponent } from './components/products-crud/delete/delete.component';
import { ProductsCrudComponent } from './components/products-crud/products-crud.component';
import { HomeComponent } from './components/views/home/home.component';
import { UpdateComponent } from './components/products-crud/update/update.component';
import { EntradaCrudComponent } from './components/entrada-crud/entrada-crud.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'produtos', component: ProductsCrudComponent },
    { path: 'criar-produto', component: CreateComponent },
    { path: 'editar-produto/:id', component: UpdateComponent },
    { path: 'deletar-produto/:id', component: DeleteComponent },
    { path: 'categoria', component: CategoryCrudComponent },
    { path: 'criar-categoria', component: CategoryPostComponent },
    { path: 'deletar-categoria/:id', component: CategoryDeleteComponent },
    { path: 'editar-categoria/:id', component: CategoryPutComponent },
    { path: 'entrada-produtos', component: EntradaCrudComponent },
    // { path: '', component: },
    // { path: '', component: },
    // { path: '', component: },
    // { path: '', component: },
    // { path: '', component: },
    // { path: '', component: },
    // { path: '', component: },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

