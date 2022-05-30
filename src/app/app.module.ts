import { registerLocaleData } from '@angular/common';
import localeRo from '@angular/common/locales/ro';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LocalStorageKey } from './shared/enum/local-storage-key';
import { SharedModule } from './shared/shared.module';

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
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
