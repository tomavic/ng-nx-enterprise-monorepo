import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { setAppLanguage, setDarkTheme, setLightTheme } from './actions';

@Injectable()
export class LayoutEffect {
  private actions$ = inject(Actions);

  onSetLightTheme$ = createEffect(() => this.actions$.pipe(ofType(setLightTheme)), { dispatch: false });

  onSetDarkTheme$ = createEffect(() => this.actions$.pipe(ofType(setDarkTheme)), { dispatch: false });

  onSetAppLanguage$ = createEffect(() => this.actions$.pipe(ofType(setAppLanguage)), { dispatch: false });
}
