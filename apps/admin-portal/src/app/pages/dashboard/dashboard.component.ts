import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  TranslocoDirective,
  TranslocoPipe,
  TranslocoService,
} from '@jsverse/transloco';
import { LayoutFacadeService } from '../../layout/facade/layout.facade.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TranslocoDirective, TranslocoPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  layoutFacade = inject(LayoutFacadeService);
  translocoService = inject(TranslocoService);

  letThereBeDark() {
    this.layoutFacade.setDarkTheme();
  }

  letThereBeLight() {
    this.layoutFacade.setLightTheme();
  }

  changeLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }
}
