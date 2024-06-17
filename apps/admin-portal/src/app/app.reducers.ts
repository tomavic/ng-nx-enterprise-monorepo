import { routerReducer } from '@ngrx/router-store';
import { LayoutReducers } from './layout/store/reducers';

export const AppReducers = {
  router: routerReducer,
  layout: LayoutReducers,
};
