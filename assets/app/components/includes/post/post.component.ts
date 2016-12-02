import { Component, Input, OnInit } from '@angular/core';
import { PostService } from "./post.service";
import { Post } from "./post.model";
import { AppService } from './../../../app.service';
import {Router} from "@angular/router";

@Component({
    selector: 'posts',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css'],
    providers: [PostService]
})
export class PostsComponent implements OnInit{

    private posts : Post[];
    private route;

    constructor(
        private postService : PostService,
        private appService : AppService,
        private _route : Router
    ){
        this.route = _route;
    }

    ngOnInit(){

        this.postService.getPosts()
            .subscribe(
                (posts: Post[]) => {
                    this.posts = posts
                }
            );

    }

    isLoggedIn(){
        return this.appService.isLoggedIn();
    }



    
}
