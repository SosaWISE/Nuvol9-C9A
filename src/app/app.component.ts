import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //** PROPERTIES */
  public isAuthenticated: boolean = false;
  title = 'My Dream App -- By Andres Sosa';
}
