import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { provideTransloco } from '@jsverse/transloco';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { appRoutes } from '../app.routes';
import { AppEffects } from './app.effects';
import { AppReducers } from './app.reducers';
import { ReduxDevToolConfig } from './dev-tool.config';
import { TranslocoHttpLoader } from './transloco.config';

export const AppConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'de'],
        defaultLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode()
      },
      loader: TranslocoHttpLoader
    }),

    // ! ORDER MATTER
    provideStore(AppReducers),
    provideEffects(AppEffects),
    provideStoreDevtools(ReduxDevToolConfig),

    // SSR Hydration
    provideClientHydration(),

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withPreloading(PreloadAllModules))
  ]
};
