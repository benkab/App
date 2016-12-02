import { Component } from '@angular/core';

@Component({
    selector: 'messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

    showStyle: false;

    constructor() {
    }

    getStyle() {
        if(this.showStyle){
            return "";
        } else {
            return "none";
        }
    }
}
