import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; // Import necessary HttpClient functions

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    provideHttpClient(withFetch()), // Configure HttpClient with fetch enabled
    provideClientHydration(withHttpTransferCacheOptions({
      includePostRequests: true
    })),
    provideAnimationsAsync()
  ]
};
