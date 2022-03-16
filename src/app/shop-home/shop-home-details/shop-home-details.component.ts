import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentScheduleInServiceComponent } from 'src/app/shared/components/dialog-content-schedule-in-service/dialog-content-schedule-in-service.component';
import { DialogContentScheduleComponent } from 'src/app/shared/components/dialog-content-schedule/dialog-content-schedule.component';
import { azetDTGoogleMapsLocation } from 'src/app/shared/utils/utils';

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
    this.dialog.open(DialogContentScheduleInServiceComponent, {
      width: '400px',
      disableClose: true
    });
  }

  openSchedule(): void {
    this.dialog.open(DialogContentScheduleComponent);
  }
}
