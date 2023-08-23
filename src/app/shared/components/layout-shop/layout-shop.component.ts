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
  offcanvasSidenavCart$ = new Observable<boolean>();

  constructor(private offcanvasService: OffcanvasService) {}

  ngOnInit(): void {
    this.offcanvasSidenavMenu$ = this.offcanvasService.offcanvasSidenavMenu$;
    this.offcanvasSidenavCart$ = this.offcanvasService.offcanvasSidenavCart$;
  }

  closeSidenavMenu(): void {
    this.offcanvasService.closeOffcanvasSidenavMenu();
  }

  closeSidenavCart(): void {
    this.offcanvasService.closeOffcanvasSidenavCart();
  }
}
