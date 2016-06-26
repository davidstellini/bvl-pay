// App
export * from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';

import {AuthService} from './services/authService';

// Application wide providers
export const APP_PROVIDERS = [
  AuthService,
  ...APP_ROUTER_PROVIDERS
];
