import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { entityConfig } from './core/services/entity-metadata';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule, // Eager loaded since we may need to go here right away as browser loads based on route user enters
    AppRoutingModule, // Main routes for application
    CoreModule, // Singleton objects (services, components that are loaded only once, etc.)
    SharedModule, // Shared (multi-instance) objects
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    NgbModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
