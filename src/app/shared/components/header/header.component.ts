import { Component, OnInit } from '@angular/core';
import { OffcanvasService } from '../../service/offcanvas.service';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/types/interface/breadcrumb';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  breadcrumbs$ = new Observable<Breadcrumb[]>();

  constructor(private offcanvasService: OffcanvasService) {}

  ngOnInit(): void {
    this.breadcrumbs$ = this.offcanvasService.breadcrumbs$;
  }

  toggleMenu(): void {
    this.offcanvasService.toggleOffcanvasNavigation();
  }
}
