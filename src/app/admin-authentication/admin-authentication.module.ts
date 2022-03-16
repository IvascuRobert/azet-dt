import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAuthenticationRoutingModule } from './admin-authentication-routing.module';
import { AdminAuthenticationComponent } from './admin-authentication.component';


@NgModule({
  declarations: [
    AdminAuthenticationComponent
  ],
  imports: [
    CommonModule,
    AdminAuthenticationRoutingModule
  ]
})
export class AdminAuthenticationModule { }
