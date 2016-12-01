import { Component, OnInit, Input } from '@angular/core';
import { PostService } from "./post.service";
import { Post } from "./post.model";

@Component({
    selector: 'posts-list',
    templateUrl: 'post.list.component.html',
    styleUrls: ['post.list.component.css']
})
export class PostsListComponent {

    @Input() posts : Post[];

    onLike(){
        console.log('A new like');
    }

}