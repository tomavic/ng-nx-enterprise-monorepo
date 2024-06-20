import { createAction, props } from '@ngrx/store';

import { AppLanguage } from './reducers';

export const setLightTheme = createAction('[Theme] set Light');
export const setDarkTheme = createAction('[Theme] set Dark');

export const setAppLanguage = createAction('[App] set Language', props<{ language: AppLanguage }>());
