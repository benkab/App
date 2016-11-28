import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { NavService } from './navbar.service';
import { AppService } from './../../../app.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    
    constructor(private navService : NavService, private appService : AppService, private router : Router){}

    onLogout(){

        this.navService.logout();
        this.router.navigateByUrl('/auth');
    }

    isLoggedIn(){
        return this.appService.isLoggedIn();
    }
}
