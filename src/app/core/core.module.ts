import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { LoggerService } from './services/logger.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule],
  declarations: [],
  providers: [
    LoggerService,
    {
      provide: 'Window',
      useFactory: () => window,
    },
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   super(parentModule);
  // }
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
