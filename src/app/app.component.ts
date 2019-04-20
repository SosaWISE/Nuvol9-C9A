/** LIBRAIES */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /** PROPERTIES */
  public isAuthenticated = false;
  title = 'IC 9 Adjuster -- By Andres Sosa';

  /** EVENT HANDLERS */
  public onAuthenticate(isAuth: boolean): void {
    /** Init */
    const self = this;

    self.isAuthenticated = isAuth;
  }
}
