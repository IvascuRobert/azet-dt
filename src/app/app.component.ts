import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'AZET D.T.';
  loading = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading.next(true);
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading.next(false);
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  onClickMenu(sidenav: MatSidenav): void {
    sidenav.toggle();
  }
}
