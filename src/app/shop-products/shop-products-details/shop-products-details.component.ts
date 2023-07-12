import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopProductsDetailsDialogComponent } from '../shop-products-details-dialog/shop-products-details-dialog.component';
import { Product } from 'src/app/types/interface/product';

@Component({
  selector: 'app-shop-products-details',
  templateUrl: './shop-products-details.component.html',
  styleUrls: ['./shop-products-details.component.scss'],
})
export class ShopProductsDetailsComponent implements OnInit {
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    // subscribe to the parameters observable
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id, 'this.id');
    });
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ShopProductsDetailsDialogComponent, {
      data: {
        id: 1,
        brand: '',
        name: '',
        type: [],
        weather: '',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
