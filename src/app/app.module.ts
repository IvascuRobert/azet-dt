import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeRo from '@angular/common/locales/ro';
import { NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { EntityDataModule, EntityDataService, HttpUrlGenerator } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CustomHttpUrlGenerator } from './core/services/custom-http-url-generator.service';
import { entityConfig } from './core/services/entity-metadata';
import { NgrxForgotPasswordMethodsService } from './core/services/ngrx-forgot-password-methods.service';
import { NgrxLoginMethodsService } from './core/services/ngrx-login-methods.service';
import { NgrxProductsMethodsService } from './core/services/ngrx-products-methods.service';
import { NgrxRegisterMethodsService } from './core/services/ngrx-register-methods.service';
import { RealTimeClockService } from './core/services/real-time-clock.service';
import { EnumLocalStorageKeysName } from './shared/enums.enum';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './shop/shop.module';
registerLocaleData(localeRo);

export function tokenGetter() {
  return localStorage.getItem(EnumLocalStorageKeysName.ACCESS_TOKEN);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ShopModule, // Eager loaded since we may need to go here right away as browser loads based on route user enters
    AppRoutingModule, // Main routes for application
    CoreModule, // Singleton objects (services, components that are loaded only once, etc.)
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter
      }
    }),
    StoreModule.forRoot({}),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    NgrxProductsMethodsService,
    NgrxLoginMethodsService,
    NgrxRegisterMethodsService,
    NgrxForgotPasswordMethodsService,
    MatSnackBar,
    {
      provide: HttpUrlGenerator,
      useClass: CustomHttpUrlGenerator
    },
    RealTimeClockService
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Inject the service to ensure it registers with EntityServices
  constructor(
    entityDataService: EntityDataService,
    // custom collection services
    ngrxProductsMethodsService: NgrxProductsMethodsService,
    ngrxLoginMethodsService: NgrxLoginMethodsService,
    ngrxRegisterMethodsService: NgrxRegisterMethodsService,
    ngrxForgotPasswordMethodsService: NgrxForgotPasswordMethodsService,
  ) {
    entityDataService.registerServices({
      Products: ngrxProductsMethodsService,
      Login: ngrxLoginMethodsService,
      Register: ngrxRegisterMethodsService,
      ForgotPassword: ngrxForgotPasswordMethodsService,
    });
  }
}
