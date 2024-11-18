import { createSelector } from '@ngrx/store';

import { AppStateInterface } from '../../store/app-state.interface';

const selectLayoutFeature = (state: AppStateInterface) => state.layout;

export const selectTheme = createSelector(selectLayoutFeature, state => state.theme);

export const selectLanguage = createSelector(selectLayoutFeature, state => state.language);
