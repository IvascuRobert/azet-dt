import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { azetDTGoogleMapsLocation } from '../../utils/utils';
import { DialogContentScheduleInServiceComponent } from '../dialog-content-schedule-in-service/dialog-content-schedule-in-service.component';
import { DialogContentScheduleComponent } from '../dialog-content-schedule/dialog-content-schedule.component';

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
    this.dialog.open(DialogContentScheduleInServiceComponent, {
      width: '400px',
      disableClose: true
    });
  }

  openSchedule(): void {
    this.dialog.open(DialogContentScheduleComponent);
  }

}
