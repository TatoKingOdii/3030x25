import {Routes} from '@angular/router';
import {LandingComponent} from "./views/landing/landing.component";
import {LoginComponent} from "./views/login/login.component";
import {HomeComponent} from "./views/home/home.component";
import {AuthGuard, authGuard} from "./guards/auth-guard/auth.guard";
import {LocationComponent} from "~challenge/location";
import {PageNotFoundComponent} from "~challenge/pnf";
import {UnauthorizedComponent} from "~challenge/unauth";
import {InactiveComponent} from "~challenge/inactive";
import {CatDirective} from "~challenge/cats";
import {WeatherComponent} from "~challenge/weather";

export const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'weather', component: WeatherComponent, canActivate: [authGuard]},
  {path: 'location', component: LocationComponent, canActivate: [authGuard]},
  {path: 'location/:id', component: LocationComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'inactive', component: InactiveComponent},
  {path: 'unauthorized', component: UnauthorizedComponent},
  // Add redirect to home if logged in
  {path: '', component: LandingComponent},
  {path: '**', component: PageNotFoundComponent}
];

export const INJECTABLES = [AuthGuard, CatDirective] as const;
