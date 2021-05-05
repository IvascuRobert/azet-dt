import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-side-nav-pages',
  templateUrl: './side-nav-pages.component.html',
  styleUrls: ['./side-nav-pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavPagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
