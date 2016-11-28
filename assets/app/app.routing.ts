import { Routes, RouterModule, CanActivate } from "@angular/router";
import { TimelineComponent } from "./components/pages/timeline/timeline.component";
import { ContactsComponent } from "./components/pages/contacts/contacts.component";
import { MessagesComponent } from "./components/pages/messages/messages.component";
import { AuthComponent } from "./components/pages/auth/auth.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { ProfileComponent } from "./components/pages/profile/profile.component";
import { AuthGuardService } from "./components/pages/auth/auth.guard.service";


const APP_ROUTES: Routes = [
    {
        path : 'auth',
        component: AuthComponent
    },
    {
        path : '',
        component: TimelineComponent
    },
    {
        path : 'contacts',
        component: ContactsComponent,
        canActivate: [AuthGuardService]
    },
    {
        path : 'messages',
        component: MessagesComponent,
        canActivate: [AuthGuardService]
    },
    {
        path : 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardService]
    },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
