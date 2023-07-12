import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/types/interface/breadcrumb';
import { OffcanvasService } from '../../service/offcanvas.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs$ = new Observable<Breadcrumb[]>();

  constructor(private offCanvasService: OffcanvasService) {}

  ngOnInit(): void {
    this.breadcrumbs$ = this.offCanvasService.breadcrumbs$;
  }
}
