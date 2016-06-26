
import { loginRoutes } from './login/login.routes';
import { homeRoutes } from './home/home.routes';
import { RouterConfig, provideRouter }          from '@angular/router';

debugger;
export const routes : RouterConfig = [
  ...loginRoutes,
  ...homeRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]
