import { Component, OnInit } from '@angular/core';
import { NgrxLoginMethodsService } from '../core/services/ngrx-login-methods.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    public ngrxLoginMethodsService: NgrxLoginMethodsService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
  }

}
