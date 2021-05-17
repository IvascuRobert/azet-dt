import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onMenu = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  clickOnMenu() {
    this.onMenu.emit(true);
  }
}
