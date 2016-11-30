import { Post } from "./post.model";
import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";


@Injectable()
export class PostService{

    private posts : Post[] = [];

    constructor(private http: Http){}

    createPost(post: Post){
        const requestBody   = JSON.stringify(post);
        const headers       = new Headers({'Content-Type': 'application/json'});
        const token         = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/post' + token, requestBody, {headers: headers})
            .map((response: Response) => {
                const result     = response.json();
                const post       = new Post(
                    result.obj.content,
                    result.obj.image,
                    result.obj._id,
                    result.obj.created_at,
                    result.obj.user.firstname,
                    result.obj.user.lastname,
                    result.obj.user._id,
                    result.obj.user.position,
                    result.obj.user.avatar
                );
                this.posts.push(post);
                return post;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getPosts(){

        return this.http.get('http://localhost:3000/post')
            .map((response: Response) => {
                const posts = response.json().obj;
                let transformedPosts : Post[] = [];
                for(let post of posts){
                    transformedPosts.push(new Post(
                        post.content,
                        post.image,
                        post._id,
                        post.created_at,
                        post.user.firstname,
                        post.user.lastname,
                        post.user._id,
                        post.user.position,
                        post.user.avatar
                    ));
                }

                this.posts = transformedPosts;
                return transformedPosts;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }



}