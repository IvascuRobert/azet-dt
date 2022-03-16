import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthenticationComponent } from './admin-authentication.component';

const routes: Routes = [{ path: '', component: AdminAuthenticationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAuthenticationRoutingModule { }
