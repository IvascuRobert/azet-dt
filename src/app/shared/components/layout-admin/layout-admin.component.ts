import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutAdminComponent implements OnInit {

  opened = true;

  constructor() { }

  ngOnInit(): void {
  }

}
