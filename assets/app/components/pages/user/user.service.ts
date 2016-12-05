import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';
import {User} from "./user.model";


@Injectable()
export class UserService{

    private user : User;

    constructor(private http: Http){}

    getUser(user : User) {

        return this.http.get('http://localhost:3000/user-profile/' + user.firstname + '/' + user.lastname)
            .map((response: Response) => {

                const user = new User(
                    response.json().obj.password,
                    response.json().obj.position,
                    response.json().obj.firstname,
                    response.json().obj.lastname,
                    response.json().obj.description,
                    response.json().obj.avatar,
                    response.json().obj.posts,
                    response.json().obj._id
                );

                this.user = user;
                return user;
            })
            .catch((error: Response) => Observable.throw(error.json()));

    }



}