import { Component, Input, OnInit } from '@angular/core';
import { PostService } from "./post.service";
import { Post } from "./post.model";
import { AppService } from './../../../app.service';
import { Router } from "@angular/router";


@Component({
    selector: 'posts',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css']
})
export class PostsComponent implements OnInit{
    
    posts : Post[];
    
    private route;

    constructor(
        private postService : PostService,
        private appService : AppService,
        private _route : Router
    ){
        this.route = _route;
    }

    isLoggedIn(){
        return this.appService.isLoggedIn();
    }

    ngOnInit(){
        this.postService.getPosts()
            .subscribe(
                (posts: Post[]) => {
                    this.posts = posts
                }
            );
    }
  
}