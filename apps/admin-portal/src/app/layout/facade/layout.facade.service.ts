import { Injectable, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs';
import { AppStateInterface } from '../../config/app-state.interface';
import { setAppLanguage, setDarkTheme, setLightTheme } from '../store/actions';
import { AppLanguage } from '../store/reducers';
import { selectTheme } from '../store/selectors';

@Injectable({ providedIn: 'root' })
export class LayoutFacadeService {
  isLightTheme$ = this.store
    .pipe(select(selectTheme))
    .pipe(filter((v) => v === 'light'));
  isDarkTheme$ = this.store
    .pipe(select(selectTheme))
    .pipe(filter((v) => v === 'dark'));

  translocoService = inject(TranslocoService);

  constructor(private store: Store<AppStateInterface>) {}

  setLightTheme() {
    this.store.dispatch(setLightTheme());
  }

  setDarkTheme() {
    this.store.dispatch(setDarkTheme());
  }

  setLanguage(language: AppLanguage) {
    this.translocoService.setActiveLang(language);

    this.store.dispatch(setAppLanguage({ language }));
  }
}
