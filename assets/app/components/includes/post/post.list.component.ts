import { AppService } from './../../../app.service';
import { Component, OnInit, Input } from '@angular/core';
import { PostService } from "./post.service";
import { Post } from "./post.model";

@Component({
    selector: 'posts-list',
    templateUrl: 'post.list.component.html',
    styleUrls: ['post.list.component.css']
})
export class PostsListComponent {

    constructor(private appService : AppService){}

    @Input() posts : Post[];

    isLoggedIn(){
        return this.appService.isLoggedIn();
    }
  
    onLike(like) {
        console.log(like);
    }

}