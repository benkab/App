import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";

import { NavbarComponent } from "./components/includes/navbar/navbar.component";
import { MenuComponent } from "./components/includes/menu/menu.component";
import { PostsComponent } from "./components/includes/post/post.component";
import { PostsInputComponent } from "./components/includes/post/post.input.component";
import { PostsListComponent } from "./components/includes/post/post.list.component";
import { SearchComponent } from "./components/includes/search/search.component";

import { CommentComponent } from "./components/includes/comment/comment.component";
import { CommentInputComponent } from "./components/includes/comment/comment.input.component";

import { DetailsComponent } from "./components/includes/detail/detail.component";

import { TimelineComponent } from "./components/pages/timeline/timeline.component";
import { ContactsComponent } from "./components/pages/contacts/contacts.component";
import { MessagesComponent } from "./components/pages/messages/messages.component";
import { AuthComponent } from "./components/pages/auth/auth.component";
import { ProfileComponent } from "./components/pages/profile/profile.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { UserComponent} from "./components/pages/user/user.component";
import { UserDetailsComponent } from "./components/pages/user/user.details.component";

import { routing } from "./app.routing";
import {MomentModule} from 'angular2-moment';

// Services
import { AppService } from "./app.service";
import { AuthService } from "./components/pages/auth/auth.service";
import { NavService } from './components/includes/navbar/navbar.service';
import { DetailsService } from './components/includes/detail/detail.service';
import { AuthGuardService } from "./components/pages/auth/auth.guard.service";
import { SeachService } from "./components/includes/search/search.service";
import { UserService } from "./components/pages/user/user.service";
import { PostService } from './components/includes/post/post.service';

@NgModule({
    declarations: [
        AppComponent,
        TimelineComponent,
        ContactsComponent,
        AuthComponent,
        NavbarComponent,
        MenuComponent,
        MessagesComponent,
        HomeComponent,
        PostsComponent,
        DetailsComponent,
        PostsInputComponent,
        SearchComponent,
        ProfileComponent,
        CommentComponent,
        CommentInputComponent,
        PostsListComponent,
        UserComponent,
        UserDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        MomentModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        AuthService,
        NavService,
        AppService,
        DetailsService,
        AuthGuardService,
        SeachService,
        UserService,
        PostService
    ]
})
export class AppModule {

}