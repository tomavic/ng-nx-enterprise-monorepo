import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Injectable } from '@angular/core';

import { setAppLanguage, setDarkTheme, setLightTheme } from './actions';

@Injectable()
export class LayoutEffect {
  onSetLightTheme$ = createEffect(
    () => this.actions$.pipe(ofType(setLightTheme)),
    { dispatch: false }
  );

  onSetDarkTheme$ = createEffect(
    () => this.actions$.pipe(ofType(setDarkTheme)),
    { dispatch: false }
  );

  onSetAppLanguage$ = createEffect(
    () => this.actions$.pipe(ofType(setAppLanguage)),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
