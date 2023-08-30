import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Router,
} from '@angular/router';
import { BehaviorSubject, distinctUntilChanged, filter } from 'rxjs';
import { Breadcrumb } from 'src/app/types/interface/breadcrumb';

@Injectable()
export class OffcanvasService {
  offcanvasSidenavMenu$ = new BehaviorSubject(false);
  offcanvasSidenavCart$ = new BehaviorSubject(false);
  breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.initBreadcrumb();
      });

    this.offcanvasSidenavCart$
      .pipe(distinctUntilChanged())
      .subscribe((opened) => {
        const bodyElement = document.querySelector('body');

        if (opened) {
          bodyElement?.classList.remove('overflow-scroll');
          bodyElement?.classList.add('overflow-hidden');
        } else {
          bodyElement?.classList.remove('overflow-hidden');
          bodyElement?.classList.add('overflow-scroll');
        }
      });
  }

  toggleOffcanvasSidenavMenu() {
    const state = !this.offcanvasSidenavMenu$.getValue();
    this.offcanvasSidenavMenu$.next(state);
  }

  openOffcanvasSidenavMenu() {
    this.offcanvasSidenavMenu$.next(true);
  }

  closeOffcanvasSidenavMenu() {
    this.offcanvasSidenavMenu$.next(false);
  }

  toggleOffcanvasSidenavCart() {
    const state = !this.offcanvasSidenavCart$.getValue();
    this.offcanvasSidenavCart$.next(state);
  }

  openOffcanvasSidenavCart() {
    this.offcanvasSidenavCart$.next(true);
  }

  closeOffcanvasSidenavCart() {
    this.offcanvasSidenavCart$.next(false);
  }

  private initBreadcrumb(): void {
    const root = this.router.routerState.snapshot.root;
    const breadcrumbs: Breadcrumb[] = [];

    this.addBreadcrumb(root, [], breadcrumbs);
    this.breadcrumbs$.next(breadcrumbs);
  }

  private addBreadcrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: Breadcrumb[]
  ): void {
    if (!route) {
      return;
    }

    const routeUrl = parentUrl.concat(route.url.map((url) => url.path));

    if (route.data['breadcrumb']) {
      const breadcrumb = {
        label: this.getRouteData(route.data),
        url: '/' + routeUrl.join('/'),
      };
      breadcrumbs.push(breadcrumb);
    }
    if (route && route.firstChild) {
      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
  }

  private getRouteData(data: Data, key = 'breadcrumb'): string {
    // The breadcrumb can be defined as a static string or as a function to construct the breadcrumb element out of the route data
    return typeof data[key] === 'function' ? data[key](data) : data[key];
  }
}
