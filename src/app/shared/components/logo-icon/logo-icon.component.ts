import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-icon',
  templateUrl: './logo-icon.component.html',
  styleUrls: ['./logo-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoIconComponent implements OnInit {

  ngOnInit(): void {
  }

}
