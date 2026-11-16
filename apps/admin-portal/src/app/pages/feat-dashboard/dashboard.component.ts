import { Component, inject } from '@angular/core';

import { TranslocoDirective } from '@jsverse/transloco';

import { LayoutStore } from '../../layout/state/layout.store';

@Component({
  selector: 'app-dashboard',
  imports: [TranslocoDirective],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  protected readonly layout = inject(LayoutStore);
}
