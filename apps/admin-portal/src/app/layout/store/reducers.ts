import { createReducer, on } from '@ngrx/store';
import { setDarkTheme, setLightTheme } from './actions';

export type DisplayTheme = 'light' | 'dark';

export type LayoutInterface = {
  theme: DisplayTheme;
};

export const initialLangState: LayoutInterface = {
  theme: 'dark',
};

export const LayoutReducers = createReducer<LayoutInterface>(
  initialLangState,

  on(setLightTheme, (state) => ({
    ...state,
    theme: 'light',
  })),
  on(setDarkTheme, (state) => ({
    ...state,
    theme: 'dark',
  }))
);
