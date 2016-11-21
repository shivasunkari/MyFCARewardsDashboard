/**
 * Created by sharmab on 11/21/2016.
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './myfca.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
