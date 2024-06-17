import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LayoutFacadeService } from '../../layout/facade/layout.facade.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  layoutFacade = inject(LayoutFacadeService);
  letThereBeDark() {
    this.layoutFacade.setDarkTheme();
  }

  letThereBeLight() {
    this.layoutFacade.setLightTheme();
  }
}
