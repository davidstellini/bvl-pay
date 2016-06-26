/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Home } from './home';
import { AuthService } from './services';
import { LoginComponent } from './login/login.component';
import { RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';

import { SlimLoadingBar } from 'ng2-slim-loading-bar';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ SlimLoadingBar],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    require('./app.css')
  ],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <ng2-slim-loading-bar></ng2-slim-loading-bar>
          <span>{{ name }}</span>
          <span class="fill"></span>

          <a md-button [routerLink]="['/home']">
            Home
          </a>
          <a md-button [routerLink]="['/login']">
            Login
          </a>
      </md-toolbar>

      <router-outlet></router-outlet>


      </md-content>
  `
})

export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'BVLPay';
  url = 'https://docs.fundsrouter.com/';


  ngOnInit() {}

}
