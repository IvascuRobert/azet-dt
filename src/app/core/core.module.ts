import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { CanActivateGuard } from './guards/can-activate.guard';
import { LocalStorageService } from './services/local-storage.service';
import { LoggerService } from './services/logger.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    RouterModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    CanActivateGuard,
    LoggerService,
    LocalStorageService,
    {
      provide: 'Window',
      useFactory: () => window
    }
  ]
})

export class CoreModule extends EnsureModuleLoadedOnceGuard { // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   super(parentModule);
  // }
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
  ) {
    super(parentModule);
  }
}
