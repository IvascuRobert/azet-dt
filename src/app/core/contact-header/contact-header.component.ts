import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
