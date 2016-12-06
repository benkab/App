import { Component, OnInit } from '@angular/core';
import { DetailsService } from './detail.service';
import { User } from './../../pages/auth/auth.model';

@Component({
    selector: 'detail',
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.css']
})
export class DetailsComponent implements OnInit{

    user : User;

    constructor(private detailsService : DetailsService){}   

    ngOnInit(){

        var userId = localStorage.getItem('userId');

        // this.detailsService.getUser(userId)
        //     .subscribe(
        //         (user: User) => {
        //             this.user = user
        //         }
        //     );

    }
}
