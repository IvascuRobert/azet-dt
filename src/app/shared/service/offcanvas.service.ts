import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Router,
} from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';
import { Breadcrumb } from 'src/app/types/interface/breadcrumb';

@Injectable()
export class OffcanvasService {
  public offcanvasNavigationOpen = new BehaviorSubject(false);
  public breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.initBreadcrumb();
      });
  }

  public toggleOffcanvasNavigation() {
    const state = !this.offcanvasNavigationOpen.getValue();
    this.offcanvasNavigationOpen.next(state);
  }

  public openOffcanvasNavigation() {
    this.offcanvasNavigationOpen.next(true);
  }

  public closeOffcanvasNavigation() {
    this.offcanvasNavigationOpen.next(false);
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
