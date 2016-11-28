import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";
import { User } from './../../pages/auth/auth.model';

@Injectable() 
export class DetailsService{

    private user : User;

    constructor(private http: Http){} 

    getUser(userId){

        const headers       = new Headers({'Content-Type': 'application/json'});
        return this.http.get('http://localhost:3000/user/' + userId, {headers: headers})
            .map((response: Response) => {
                return this.user = response.json().obj;
            })
            .catch((error: Response) => Observable.throw(error.json()));
        
    }


}