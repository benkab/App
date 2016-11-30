import { Component, Input } from '@angular/core';
import { PostService } from "./post.service";
import { Post } from "./post.model";

@Component({
    selector: 'posts',
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css'],
    providers: [PostService]
})
export class PostsComponent {

    constructor(private postService : PostService){}
    
}
