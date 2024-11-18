import { Route } from '@angular/router';

import { HomeComponent } from './layout/containers/home/Home.component';
import { LoginComponent } from './layout/containers/login/Login.component';
import { NotFound4O4Component } from './layout/containers/not-found/NotFound4O4.component';
import { HomeGuard } from './layout/guards/home.guard';
import { LoginGuard } from './layout/guards/login.guard';

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
        loadComponent: () => import('./pages/feat-dashboard/dashboard.component').then(m => m.DashboardComponent)
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
