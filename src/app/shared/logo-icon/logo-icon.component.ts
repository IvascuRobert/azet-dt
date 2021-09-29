import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-logo-icon',
  templateUrl: './logo-icon.component.html',
  styleUrls: ['./logo-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoIconComponent {
  darkMode = false;

  constructor(public themeService: ThemeService) {

    const themeName = this.themeService.getStoredThemeName();

    if (themeName === 'azet-dt-theme-light') {
      this.darkMode = true;
    }
  }
}
