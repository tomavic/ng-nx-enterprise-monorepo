import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../app-state.interface';

const selectLayoutFeature = (state: AppStateInterface) => state.layout;

export const selectTheme = createSelector(
  selectLayoutFeature,
  (state) => state.theme
);
