import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppEffects } from './app.effects';
import { AppReducers } from './app.reducers';
import { appRoutes } from './app.routes';
import { ReduxDevToolConfig } from './dev-tool.config';

export const AppConfig: ApplicationConfig = {
  providers: [
    // ! ORDER MATTER
    provideStore(AppReducers),
    provideEffects(AppEffects),
    provideStoreDevtools(ReduxDevToolConfig),

    // SSR Hydration
    provideClientHydration(),

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withPreloading(PreloadAllModules)),
  ],
};
