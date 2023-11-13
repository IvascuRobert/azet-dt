import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OffcanvasService } from '../../service/offcanvas.service';

@Component({
  selector: 'app-layout-shop',
  templateUrl: './layout-shop.component.html',
  styleUrls: ['./layout-shop.component.scss'],
})
export class LayoutShopComponent implements OnInit {
  offcanvasSidenavMenu$ = new Observable<boolean>();

  constructor(private offcanvasService: OffcanvasService) {}

  ngOnInit(): void {
    this.offcanvasSidenavMenu$ = this.offcanvasService.offcanvasSidenavMenu$;
  }
}
