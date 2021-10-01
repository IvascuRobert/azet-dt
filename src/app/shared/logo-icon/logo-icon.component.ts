import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme.service';
import { SubSink } from 'subsink';
import { ISiteTheme } from '../interfaces.interface';

@Component({
  selector: 'app-logo-icon',
  templateUrl: './logo-icon.component.html',
  styleUrls: ['./logo-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoIconComponent implements OnInit, OnDestroy {

  private subs = new SubSink();
  isDark = new BehaviorSubject<boolean>(true);

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    const themeName = this.themeService.getStoredThemeName();

    if (themeName === 'azet-dt-theme-light') {
      this.isDark.next(false);
    }

    this.subs.sink = this.themeService.onThemeUpdate.subscribe((theme: ISiteTheme) => {
      if (typeof theme.isDark === 'boolean') {
        this.isDark.next(theme.isDark);
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
