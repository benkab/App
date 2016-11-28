import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { User } from "./auth.model"
import { Http } from "@angular/http";


@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    
    constructor(private authService : AuthService, private router : Router){}
    
    onSignUp(form: NgForm){

        const user = new User(
            form.value.email,
            form.value.password,
            form.value.position,
            form.value.firstname,
            form.value.lastname
        );

        this.authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );

        form.reset();
    }

    onSignIn(form: NgForm){

        const user = new User(form.value.email, form.value.password);
        
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            );

    }
}