import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ProductsService } from './core/services/products-data.service';
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
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    NgbModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [
    ProductsService,
    {
      provide: HttpUrlGenerator,
      useClass: CustomHttpUrlGenerator
    }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Inject the service to ensure it registers with EntityServices
  constructor(
    entityDataService: EntityDataService,
    // custom collection services
    productsService: ProductsService
  ) {
    entityDataService.registerService('Products', productsService);
  }
}
