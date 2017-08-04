import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// Google Analytics
declare var ga : Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //Google Analytics
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pagview');
      }
    });
  }

}
