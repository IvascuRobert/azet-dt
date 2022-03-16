import { PlatformLocation } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-copy-link',
  templateUrl: './copy-link.component.html',
  styleUrls: ['./copy-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CopyLinkComponent implements OnInit {

  baseUrl = '';

  @Input() pathUrl = '';

  constructor(
    platformLocation: PlatformLocation,
    private _snackBar: MatSnackBar
  ) {
    this.baseUrl = (platformLocation as any).location.origin;
  }

  ngOnInit(): void {

  }

  clickOnCopyToClipboard() {
    this._snackBar.open('Link copiat!', 'Închide', {
      duration: 2000,
    });
  }
}
