import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import {INJECTABLES, routes} from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideHttpClient, withFetch} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideIonicAngular({}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withFetch()),
    ...INJECTABLES
  ]
};
