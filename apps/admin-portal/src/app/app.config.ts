import { provideHttpClient, withXhr } from '@angular/common/http';
import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withNoIncrementalHydration } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { provideTransloco } from '@jsverse/transloco';

import { appRoutes } from './app.routes';
import { TranslocoHttpLoader } from './transloco.config';

export const AppConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withXhr()),
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

    // SSR Hydration
    provideClientHydration(withNoIncrementalHydration()),

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withPreloading(PreloadAllModules))
  ]
};
