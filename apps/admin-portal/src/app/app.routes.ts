import { Route } from '@angular/router';

import { HomeComponent } from './containers/home-page/Home.component';
import { LoginComponent } from './containers/login-page/Login.component';
import { NotFound4O4Component } from './containers/not-found-page/NotFound4O4.component';
import { HomeGuard } from './guards/home.guard';
import { LoginGuard } from './guards/login.guard';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [LoginGuard],
    component: LoginComponent
  },
  /**
   * All Pages that are commonly using the same Header and Footer,
   * are grouped under the Home Layout
   */
  {
    path: 'home',
    canActivate: [HomeGuard],
    component: HomeComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
      }

      // Option 1: Lazy Loading another Routing Config
      // {
      //   path: 'flight-booking',
      //   loadChildren: () =>
      //     import('./booking/flight-booking.routes').then(
      //       (m) => m.FLIGHT_BOOKING_ROUTES
      //     ),
      // },

      // Option 2: Directly Lazy Loading a Standalone Component
      // {
      //   path: 'next-flight',
      //   loadComponent: () =>
      //     import('./next-flight/next-flight.component').then(
      //       (m) => m.NextFlightComponent
      //     ),
      // },
    ]
  },

  { path: 'not-found-404', component: NotFound4O4Component },
  { path: '**', redirectTo: 'not-found-404' }
];
