import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryCrudComponent } from './components/category-crud/category-crud.component';
import { CategoryDeleteComponent } from './components/category-crud/category-delete/category-delete.component';
import { CategoryPostComponent } from './components/category-crud/category-post/category-post.component';
import { CategoryPutComponent } from './components/category-crud/category-put/category-put.component';
import { CategoryReadComponent } from './components/category-crud/category-read/category-read.component';
import { EntradaCrudComponent } from './components/entrada-crud/entrada-crud.component';
import { EntradaDeleteComponent } from './components/entrada-crud/entrada-delete/entrada-delete.component';
import { EntradaPostComponent } from './components/entrada-crud/entrada-post/entrada-post.component';
import { EntradaPutComponent } from './components/entrada-crud/entrada-put/entrada-put.component';
import { EntradaReadComponent } from './components/entrada-crud/entrada-read/entrada-read.component';
import { CreateComponent } from './components/products-crud/create/create.component';
import { DeleteComponent } from './components/products-crud/delete/delete.component';
import { ProductsCrudComponent } from './components/products-crud/products-crud.component';
import { ReadComponent } from './components/products-crud/read/read.component';
import { UpdateComponent } from './components/products-crud/update/update.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './components/views/home/home.component';
import { ProductsComponent } from './components/views/products/products.component';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { SubCatPostComponent } from './components/sub-category/sub-cat-post/sub-cat-post.component';
import { SubCatReadComponent } from './components/sub-category/sub-cat-read/sub-cat-read.component';
import { SubCatPutComponent } from './components/sub-category/sub-cat-put/sub-cat-put.component';
import { SubCatDeleteComponent } from './components/sub-category/sub-cat-delete/sub-cat-delete.component';

registerLocaleData(localePt);

const maskConfigFunction: () => Partial<IConfig> = () => {
    return {
        validation: false,
    };
};

export const customCurrencyMaskConfig = {
    align: "left",
    allowNegative: true,
    allowZero: true,
    decimal: ",",
    precision: 2,
    prefix: "R$ ",
    suffix: "",
    thousands: ".",
    nullable: true,
    min: 0,
    max: 10000000,
    inputMode: CurrencyMaskInputMode.FINANCIAL,
};

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ProductsCrudComponent,
        CreateComponent,
        ReadComponent,
        UpdateComponent,
        DeleteComponent,
        CategoryPostComponent,
        CategoryPutComponent,
        CategoryDeleteComponent,
        CategoryReadComponent,
        CategoryCrudComponent,
        EntradaCrudComponent,
        EntradaPostComponent,
        EntradaDeleteComponent,
        EntradaReadComponent,
        EntradaPutComponent,
        ProductsComponent,
        SubCategoryComponent,
        SubCatPostComponent,
        SubCatReadComponent,
        SubCatPutComponent,
        SubCatDeleteComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialImportsModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        NgxMaskModule.forRoot(maskConfigFunction),
        NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
        NgxPaginationModule,
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR',
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
