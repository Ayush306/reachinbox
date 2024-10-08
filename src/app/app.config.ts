import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { HashLocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers:  [provideZoneChangeDetection({ eventCoalescing: true }),provideHttpClient(), provideRouter(routes, withHashLocation())]
};
