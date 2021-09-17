import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-logo-icon',
  templateUrl: './logo-icon.component.html',
  styleUrls: ['./logo-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoIconComponent implements OnInit {

  darkMode$: Observable<boolean>;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.darkMode$ = this.themeService.darkMode$;
  }

}
