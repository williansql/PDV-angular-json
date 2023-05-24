import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    @Input() nameHeader?: string;

    menu: any;

    constructor(private router: Router){ }

    ngOnInit(){
        console.log(this.nameHeader);
        if (this.router.url == "/"){
            this.menu = 'Inicio';
        }else{
            this.menu = this.nameHeader!.length;
        }

    }
}
