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
import { CreateComponent } from './components/products-crud/create/create.component';
import { ProductsCrudComponent } from './components/products-crud/products-crud.component';
import { ReadComponent } from './components/products-crud/read/read.component';
import { UpdateComponent } from './components/products-crud/update/update.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { ProductsComponent } from './components/views/products/products.component';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { DeleteComponent } from './components/products-crud/delete/delete.component';

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
        NavComponent,
        HomeComponent,
        ProductsComponent,
        ProductsCrudComponent,
        CreateComponent,
        ReadComponent,
        UpdateComponent,
        DeleteComponent,
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
