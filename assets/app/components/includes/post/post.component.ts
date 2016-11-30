import {Component, OnInit} from '@angular/core';
import {PostService} from "./post.service";
import { Post } from "./post.model";

@Component({
    selector: 'posts',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css'],
    providers: [PostService]
})
export class PostsComponent implements OnInit{

    posts : Post[];

    constructor(private postService : PostService){}

    ngOnInit(){

        this.postService.getPosts()
            .subscribe(
                (posts: Post[]) => {
                    this.posts = posts
                }
            );

    }
}