import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityDataService } from '@ngrx/data';
import { SharedModule } from '../shared/shared.module';
import { NgrxDataForgotPasswordService } from './service/forgot-password/ngrx-data-forgot-password.service';
import { NgrxDataLoginService } from './service/login/ngrx-data-login.service';
import { NgrxDataRegisterService } from './service/register/ngrx-data-register.service';
import { ShopAuthenticationRoutingModule } from './shop-authentication-routing.module';
import { ShopAuthenticationViewComponent } from './shop-authentication-view/shop-authentication-view.component';

@NgModule({
  declarations: [
    ShopAuthenticationViewComponent
  ],
  imports: [
    CommonModule,
    ShopAuthenticationRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
  ]
})
export class ShopAuthenticationModule {
  constructor(
    // handle ngrx data methods
    ngrxDataLoginService: NgrxDataLoginService,
    ngrxDataRegisterService: NgrxDataRegisterService,
    ngrxDataForgotPasswordService: NgrxDataForgotPasswordService,
    entityDataService: EntityDataService,
  ) {
    entityDataService.registerServices({
      Login: ngrxDataLoginService,
      Register: ngrxDataRegisterService,
      ForgotPassword: ngrxDataForgotPasswordService,
    });
  }
}
