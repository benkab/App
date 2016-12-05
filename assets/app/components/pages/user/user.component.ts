import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { User} from "./user.model";
import { UserService } from "./user.service";

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls : ['./user.component.css']
})
export class UserComponent implements OnInit{

    private user : User;

    constructor(private route: ActivatedRoute, private userService : UserService){}

    ngOnInit(){
        this.route.params.subscribe(params => {
            const user = new User("", "", "", params['firstname'], params['lastname']);
            this.userService.getUser(user)
                .subscribe(
                    (user: User) => {
                        this.user = user
                    }
                )
        });
    }
}