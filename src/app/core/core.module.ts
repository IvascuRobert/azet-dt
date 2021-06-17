import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { FooterComponent } from './footer/footer.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { HeaderComponent } from './header/header.component';
import { TrackByService } from './services/trackBy.service';
import { SideNavPagesComponent } from './side-nav-pages/side-nav-pages.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatRippleModule,
    MatCardModule,
    MatBadgeModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    SideNavPagesComponent,
    ContactHeaderComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavPagesComponent,
    ContactHeaderComponent
  ],
  providers: [
    TrackByService,
    CanActivateGuard,
    {
      provide: 'Window',
      useFactory: () => window
    }
  ] // these should be singleton
})

export class CoreModule extends EnsureModuleLoadedOnceGuard { // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}
