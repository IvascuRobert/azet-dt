import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-icon',
  templateUrl: './logo-icon.component.html',
  styleUrls: ['./logo-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoIconComponent {
  @Input() position: 'center' | 'end' | 'start' = 'center';
}
