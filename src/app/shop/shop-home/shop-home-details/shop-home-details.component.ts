import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { azetDTGoogleMapsLocation } from 'src/app/shared/utils';
import { ShopDialogContentScheduleInServiceComponent } from '../../shop-dialog-content-schedule-in-service/shop-dialog-content-schedule-in-service.component';
import { ShopDialogContentScheduleComponent } from '../../shop-dialog-content-schedule/shop-dialog-content-schedule.component';
@Component({
  selector: 'app-shop-home-details',
  templateUrl: './shop-home-details.component.html',
  styleUrls: ['./shop-home-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopHomeDetailsComponent implements OnInit {

  azetDtLocation = azetDTGoogleMapsLocation;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openScheduleInService(): void {
    this.dialog.open(ShopDialogContentScheduleInServiceComponent, {
      width: '400px',
      disableClose: true
    });
  }

  openSchedule(): void {
    this.dialog.open(ShopDialogContentScheduleComponent);
  }
}
