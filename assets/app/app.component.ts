import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    
    constructor(private appService : AppService){}

    isLoggedIn(){
        return this.appService.isLoggedIn();
    }
}
