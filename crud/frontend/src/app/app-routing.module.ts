import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './components/products-crud/create/create.component';
import { DeleteComponent } from './components/products-crud/delete/delete.component';
import { ProductsCrudComponent } from './components/products-crud/products-crud.component';
import { UpdateComponent } from './components/products-crud/update/update.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'produtos', component: ProductsCrudComponent },
    { path: 'criar-produto', component: CreateComponent },
    { path: 'atualizar-produto/:id', component: UpdateComponent },
    { path: 'deletar-produto/:id', component: DeleteComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

