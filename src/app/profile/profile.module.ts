import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProfileRoutingModule,
    MatButtonModule
  ],
  declarations: [ProfileRoutingModule.components]
})

export class ProfileModule { }
