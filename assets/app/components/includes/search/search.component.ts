import {Component, OnInit, Input} from '@angular/core';
import { SeachService } from "./search.service";
import {Search} from "./search.model";

@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
})
export class SearchComponent {

    private users : Search[];
    private display = "none";

    constructor(private seachService : SeachService){}

    onSearch(search)
    {
        var term  = search.value;

        if(term.trim() === ""){
            this.display = "none";
        }
        else{
            if(term !== null)
            {
                this.display = "";
                this.seachService.getUsers(term)
                    .subscribe(
                        (users: Search[]) => {
                            this.users = users
                        }
                    );

            }
        }

    }

}