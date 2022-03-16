import { registerLocaleData } from '@angular/common';
import localeRo from '@angular/common/locales/ro';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { EntityDataModule, HttpUrlGenerator } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LocalStorageKey } from './shared/enum/local-storage-key';
import { SharedModule } from './shared/shared.module';
import { CustomHttpUrlGenerator } from './shared/utils/custom-http-url-generator.service';
import { entityConfig } from './shared/utils/entity-metadata';

registerLocaleData(localeRo);

export function tokenGetter() {
  return localStorage.getItem(LocalStorageKey.ACCESS_TOKEN);
}
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    JwtModule.forRoot({
      config: {
        tokenGetter
      }
    }),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    {
      provide: HttpUrlGenerator,
      useClass: CustomHttpUrlGenerator
    }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
