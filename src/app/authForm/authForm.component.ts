//** LIBRARIES */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'auth',
    templateUrl: './authForm.html',
    styleUrls: ['authForm.scss']
})
export class AuthFormComponent implements OnInit {
    //** PROPERTIES AND METHODS */
    @Output('onAuthenticate') onAuthenticate: EventEmitter<boolean> = new EventEmitter<boolean>();
    public frmMain: FormGroup;

    //** CONSTRUCTOR AND DI */
    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit(): void {
        //** Init */
        let self = this;

        //** Init Form */
        self.initForm();
    }

    private initForm(): void {
        //** Init */
        let self = this;

        self.frmMain = self.formBuilder.group({
            userName: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required]),
            rememberMe: new FormControl(null)
        });
    }

    public login(): void {
        //** Init */
        let self = this;

        alert(`Yes you are tryng to login with u:${self.frmMain.controls["userName"].value} | P: ${self.frmMain.controls["password"].value} | R: ${self.frmMain.controls["rememberMe"].value}`);
        self.onAuthenticate.emit(true);
    }

}