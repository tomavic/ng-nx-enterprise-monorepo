import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';

@Component({
  standalone: true,
  imports: [RouterModule, DashboardComponent],
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}
