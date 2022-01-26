import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShopDialogContentScheduleInServiceComponent } from 'src/app/shop/shop-dialog-content-schedule-in-service/shop-dialog-content-schedule-in-service.component';
import { ShopDialogContentScheduleComponent } from 'src/app/shop/shop-dialog-content-schedule/shop-dialog-content-schedule.component';
import { azetDTGoogleMapsLocation } from '../utils';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {

  azetDtLocation = azetDTGoogleMapsLocation;

  @Input() title = 'Detalii de contact';
  @Input() showJuridicDetails = true;
  @Input() showContactPageDetail = true;

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
