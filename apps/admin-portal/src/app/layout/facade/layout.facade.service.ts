import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs';
import { AppStateInterface } from '../../app-state.interface';
import { setDarkTheme, setLightTheme } from '../store/actions';
import { selectTheme } from '../store/selectors';

@Injectable({ providedIn: 'root' })
export class LayoutFacadeService {
  isLightTheme$ = this.store
    .pipe(select(selectTheme))
    .pipe(filter((v) => v === 'light'));
  isDarkTheme$ = this.store
    .pipe(select(selectTheme))
    .pipe(filter((v) => v === 'dark'));

  constructor(private store: Store<AppStateInterface>) {}

  setLightTheme() {
    this.store.dispatch(setLightTheme());
  }

  setDarkTheme() {
    this.store.dispatch(setDarkTheme());
  }
}
