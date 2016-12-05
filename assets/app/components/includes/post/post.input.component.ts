import { Component, Input, OnInit } from '@angular/core';
import {PostService} from "./post.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Post } from "./post.model";

@Component({
    selector: 'posts-input',
    templateUrl: 'post.input.component.html',
    styleUrls: ['post.input.component.css']
})
export class PostsInputComponent implements OnInit{
    
    post : Post;
    
    constructor(private postService : PostService, private router : Router){}

    onCreatePost(form : NgForm) {

        const post = new Post(
            form.value.content,
            form.value.image
        );

        this.postService.createPost(post)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        form.resetForm();

    }

    ngOnInit()
    {
        this.postService.postToBeEdited
            .subscribe(
                (post : Post) => this.post = post
            );
    }
    
}