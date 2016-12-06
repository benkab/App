import { AppService } from './../../../app.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from "./post.service";
import { Post } from "./post.model";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'posts-list',
    templateUrl: 'post.list.component.html',
    styleUrls: ['post.list.component.css']
})
export class PostsListComponent {

    @Input() posts : Post[];

    showStyle: false;

    constructor(
        private appService : AppService,
        private postService : PostService,
        private route: ActivatedRoute
    ){}

    isLoggedIn(){
        return this.appService.isLoggedIn();
    }
  
    onLike(like) {
        console.log(like);
    }

    onEdit(post : Post){
        this.postService.editPost(post);
    }

    onDelete(post : Post){
        this.postService.deletePost(post)
            .subscribe( result => console.log(result));
    }

    belongsToUser(post : Post){
        return localStorage.getItem('userId') == post.user_id;
    }

    getStyle() {
        if(this.showStyle){
            return "";
        } else {
            return "none";
        }
    }


}
