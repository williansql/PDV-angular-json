import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    private API = "http://localhost:3001/produtos";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }

    showMenssage(msg: string){
        this.snackBar.open(msg, 'Fechar', {
            duration: 3000,
            horizontalPosition: 'start',
            verticalPosition: 'top'

        })
    }

    create(produto: Product): Observable<Product>{
        return this.http.post<Product>(
            this.API, produto
        );
    }

    read(): Observable<Product[]>{
        return this.http.get<Product[]>(this.API);
    }

    readById(id: string){
        const url = `${this.API}/${id}`;
        return this.http.get<Product>(url);
    }

    update(produto: Product): Observable<Product>{
        const url = `${this.API}/${produto.id}`;
        return this.http.put<Product>(url, produto);
    }

    delete(id: string): Observable<Product>{
        const url = `${this.API}/${id}`;
        return this.http.delete<Product>(url);
    }
}
