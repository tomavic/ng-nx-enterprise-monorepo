import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/feat-dashboard/dashboard.component';

@Component({
    imports: [RouterModule, DashboardComponent],
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {}
