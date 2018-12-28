//** LIBRARIES */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'auth',
    templateUrl: './authForm.html',
    styleUrls: ['authForm.scss']
})
export class AuthFormComponent implements OnInit {
    //** PROPERTIES AND METHODS */
    @Output('onAuthenticate') onAuthenticate: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnInit(): void {
        //** Init */
        let self = this;

    }

    public login(): void {
        //** Init */
        let self = this;

        alert("Yes you are tryng to login.");
        self.onAuthenticate.emit(true);
    }

}