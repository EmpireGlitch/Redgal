import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import { HomeComponent } from './HomeComponent/home.component';
import { RegisterComponent } from './RegisterComponent/register.component';
import { logoutService } from './services/logout.service';

@Component({
    selector: 'my-app',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [logoutService]
})
@RouteConfig([
  {path: '/game/...', name: 'Home' , component: HomeComponent},
  {path: '/register', name: 'Register' , component: RegisterComponent, useAsDefault: true},
])

export class AppComponent {}
