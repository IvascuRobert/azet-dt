import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { TrackByService } from './services/trackBy.service';
import { SideNavPagesComponent } from './side-nav-pages/side-nav-pages.component';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, MatToolbarModule, MatIconModule, MatTooltipModule, MatButtonModule],
  exports: [RouterModule, HttpClientModule, HeaderComponent, FooterComponent, SideNavPagesComponent],
  declarations: [HeaderComponent, FooterComponent, SideNavPagesComponent],
  providers: [
    TrackByService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: 'Window', useFactory: () => window }
  ] // these should be singleton
})

export class CoreModule extends EnsureModuleLoadedOnceGuard { // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}