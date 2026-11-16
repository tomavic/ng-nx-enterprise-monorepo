import { provideServerRendering } from '@angular/ssr';
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';

import { AppConfig } from './app.config';

const ServerConfig: ApplicationConfig = {
  providers: [provideServerRendering()]
};

export const config = mergeApplicationConfig(AppConfig, ServerConfig);
