import { Search } from "./search.model";
import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';


@Injectable()
export class SeachService{

    private searches : Search[];

    constructor(private http: Http){}

    getUsers(term : String){

        const token         = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';

        return this.http.get('http://localhost:3000/user/search/' + term)
            .map((response: Response) => {
                const users = response.json().obj;
                let transformedUsers : Search[] = [];
                for(let user of users){
                    transformedUsers.push(new Search(
                        user._id,
                        user.firstname,
                        user.lastname,
                        user.avatar,
                        user.position,
                        user.posts
                    ));
                }

                this.searches = transformedUsers;
                return transformedUsers;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }



}