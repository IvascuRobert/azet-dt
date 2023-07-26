import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {
  @Input() title = 'Detalii de contact';
  @Input() showJuridicDetails = true;
  @Input() showContactPageDetail = true;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
}
