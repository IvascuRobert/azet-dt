import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() openSideNavDrawer = new EventEmitter<boolean>();

  isSerachOverlayOpened = false;
  isMenuOverlayOpened = false;
  azetDtLocation = 'https://www.google.com/maps/place/Azet+DT+Resapare+Anvelope+Camion+SRL/@45.6575573,25.641716,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x40b35c6b2de4023d:0x1b5da9eebf44f902!2sAzet+DT+Resapare+Anvelope+Camion+SRL!8m2!3d45.6575587!4d25.6439095!3m4!1s0x40b35c6b2de4023d:0x1b5da9eebf44f902!8m2!3d45.6575587!4d25.6439095';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  search(text: string): void {
    console.log(text, 'text');
  }

  toggleSearchOverlay(): void {
    this.isSerachOverlayOpened = !this.isSerachOverlayOpened;
    this.isMenuOverlayOpened = false;
  }

  toggleMenuOverlay(): void {
    this.isMenuOverlayOpened = !this.isMenuOverlayOpened;
    this.isSerachOverlayOpened = false;
  }

  clickMenuIcon(): void {
    this.openSideNavDrawer.emit(true);
  }
}
