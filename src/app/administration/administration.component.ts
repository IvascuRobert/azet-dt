import { Component, OnInit } from '@angular/core';
import { NgrxLoginMethodsService } from '../core/services/ngrx-login-methods.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor(
    public ngrxLoginMethodsService: NgrxLoginMethodsService
  ) { }

  ngOnInit(): void {
  }

}
