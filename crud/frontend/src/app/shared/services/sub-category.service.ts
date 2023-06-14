import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SubCategory } from '../model/sub-category';
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class SubCategoryService {
    private API = "http://localhost:3001/sub-category";

    constructor(
        private http: HttpClient,
        private snackBar: MatSnackBar,
    ) {}

    subPost(subCategory: SubCategory): Observable<SubCategory>{
        return this.http.post<SubCategory>(this.API, subCategory);
    }

    subPut(subCategory: SubCategory): Observable<SubCategory>{
        const url = `${this.API} / ${subCategory.id}`;
        return this.http.put<SubCategory>(this.API, subCategory);
    }

    subGet(): Observable<SubCategory[]>{
        return this.http.get<SubCategory[]>(this.API);
    }

    subGetId(id: string): Observable<SubCategory>{
        const url = `${this.API}/${id}`;
        return this.http.get<SubCategory>(url);
    }

    subDelete(id: string): Observable<SubCategory>{
        const url = `${this.API}/${id}`;
        return this.http.delete<SubCategory>(url);
    }

    message(msg: string){
        this.snackBar.open(
            msg, 'Fechar', {
                duration: 5000,
                horizontalPosition: "start",
                verticalPosition: 'top',
            }
        )
    }

}
