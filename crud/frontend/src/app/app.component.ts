import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styles: [],
})
export class AppComponent {
    title = "frontend";
    rota?: string;

    constructor(private router: Router) {
        this.rota = this.router.url;
    }
}
