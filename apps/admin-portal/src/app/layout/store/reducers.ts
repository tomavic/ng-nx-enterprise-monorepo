import { createReducer, on } from '@ngrx/store';
import { setAppLanguage, setDarkTheme, setLightTheme } from './actions';

export type DisplayTheme = 'light' | 'dark';
export type AppLanguage = 'ar' | 'en' | 'de' | 'es';

export type LayoutInterface = {
  theme: DisplayTheme;
  language: AppLanguage;
};

export const initialLangState: LayoutInterface = {
  theme: 'dark',
  language: 'en',
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
  })),

  on(setAppLanguage, (state, action) => ({
    ...state,
    language: action.language,
  }))
);
