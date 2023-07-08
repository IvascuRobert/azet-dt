import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OffcanvasService } from '../../service/offcanvas.service';

@Component({
  selector: 'app-layout-shop',
  templateUrl: './layout-shop.component.html',
  styleUrls: ['./layout-shop.component.scss'],
})
export class LayoutShopComponent implements OnInit {
  offcanvasNavigationOpen$ = new Observable<boolean>();

  constructor(private offcanvasService: OffcanvasService) { }

  ngOnInit(): void {
    this.offcanvasNavigationOpen$ = this.offcanvasService.offcanvasNavigationOpen;
  }

  close(): void {
    this.offcanvasService.closeOffcanvasNavigation();
  }
}
