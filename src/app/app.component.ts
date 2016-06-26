/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Home } from './home';
import { AuthService } from './services';
import { loginComponent } from './login/login.component';
import { RouterConfig, ROUTER_DIRECTIVES } from '@angular/router'


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ ROUTER_DIRECTIVES ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    require('./app.css')
  ],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <span>{{ name }}</span>
          <span class="fill"></span>

      </md-toolbar>

      <router-outlet></router-outlet>

      </md-content>
  `
})

export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'BVLPay';
  url = 'http://docs.fundsrouter.com/';

  constructor() {

  }

  ngOnInit() {}

}

//Routes:
export const routes : RouterConfig = [
  { path: 'home',  component: Home },
  { path: 'login', component: loginComponent },
  { path: 'app', component: App }
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
];
