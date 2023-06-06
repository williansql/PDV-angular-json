import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { Entrada } from '../model/entrada.model';
import { Saida } from '../model/saida.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    private API = "http://localhost:3001/produtos";
    private inventory: Product[] = [];

    addToInventory(entrada: Entrada): void{
        const produto = entrada.product;
        const quantidade = entrada.quantity;
        const produtoExistente  = this.inventory.find(p => p.id === produto.id);

        if(produtoExistente){
            produtoExistente.quantity += quantidade;
        }else{
            this.inventory.push({...produto, quantity: quantidade});
        }
    }

    removeFromInventory(saida: Saida): void{
        const produto = saida.product;
        const quantidade = saida.quantity;
        const produtoExistente = this.inventory.find(p => p.id === produto.id);

        if (produtoExistente){

            produtoExistente.quantity -= quantidade;

            if (produtoExistente!.quantity <= 0){
                const index = this.inventory.indexOf(produtoExistente!);
                this.inventory.splice(index, 1);
            }
        }
    }

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

    productPost(produto: Product): Observable<Product>{
        return this.http.post<Product>(
            this.API, produto
        );
    }

    productGet(): Observable<Product[]>{
        return this.http.get<Product[]>(this.API);
    }

    getById(id: string){
        const url = `${this.API}/${id}`;
        return this.http.get<Product>(url);
    }

    productPut(produto: Product): Observable<Product>{
        const url = `${this.API}/${produto.id}`;
        return this.http.put<Product>(url, produto);
    }

    productDelete(id: string): Observable<Product>{
        const url = `${this.API}/${id}`;
        return this.http.delete<Product>(url);
    }
}
