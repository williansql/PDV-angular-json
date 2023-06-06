import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Category } from "../model/category.model";

@Injectable({
    providedIn: "root",
})
export class CategoryService {
    private API = "http://localhost:3001/category";

    constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

    showMenssage(msg: string) {
        this.snackBar.open(msg, "Fechar", {
            duration: 3000,
            horizontalPosition: "start",
            verticalPosition: "top",
        });
    }

    postCategory(category: Category): Observable<Category> {
        return this.http.post<Category>(this.API, category);
    }

    getCategory(): Observable<Category[]> {
        return this.http.get<Category[]>(this.API);
    }

    getById(id: string) {
        const url = `${this.API}/${id}`;
        return this.http.get<Category>(url);
    }

    updateCategory(category: Category): Observable<Category> {
        const url = `${this.API}/${category.id}`;
        return this.http.put<Category>(url, category);
    }

    deleteCategory(id: string): Observable<Category> {
        const url = `${this.API}/${id}`;
        return this.http.delete<Category>(url);
    }
}

