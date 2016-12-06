import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { User} from "./user.model";
import { UserService } from "./user.service";

@Component({
    selector: 'user-details',
    templateUrl: './user.details.component.html',
    styleUrls : ['./user.details.component.css']
})
export class UserDetailsComponent {

    @Input() user : User;

}