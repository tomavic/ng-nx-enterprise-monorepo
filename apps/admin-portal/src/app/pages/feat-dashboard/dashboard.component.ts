import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { LayoutFacadeService } from '../../layout/facade/layout.facade.service';
import { AppLanguage } from '../../layout/store/reducers';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TranslocoDirective, TranslocoPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  layoutFacade = inject(LayoutFacadeService);

  letThereBeDark() {
    this.layoutFacade.setDarkTheme();
  }

  letThereBeLight() {
    this.layoutFacade.setLightTheme();
  }

  changeLanguage(lang: string): void {
    this.layoutFacade.setLanguage(lang as AppLanguage);
  }
}
