import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { NgrxProductsService } from 'src/app/core/services/ngrx-products.service';
import { TrackByService } from 'src/app/core/services/trackBy.service';
import { ProductClass } from 'src/app/shared/classes.class';
import { EnumState } from 'src/app/shared/enums.enum';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardComponent implements OnInit {

  loading$: Observable<boolean>;
  products$: Observable<ProductClass[]>
  stateTemplate = EnumState;

  constructor(
    private ngrxProductsService: NgrxProductsService,
    public trackbyService: TrackByService
  ) {
    this.products$ = this.ngrxProductsService.entities$;
    this.loading$ = this.ngrxProductsService.loading$;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.ngrxProductsService.getAll();
  }

  clickOnMenu(sidenav: MatSidenav): void {
    sidenav.toggle();
  }

}