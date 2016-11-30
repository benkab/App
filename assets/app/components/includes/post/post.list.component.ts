import { Component, OnInit, Input } from '@angular/core';
import { PostService } from "./post.service";
import { Post } from "./post.model";

@Component({
    selector: 'posts-list',
    templateUrl: 'post.list.component.html',
    styleUrls: ['post.list.component.css'],
    providers: [PostService]
})
export class PostsListComponent implements OnInit{

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