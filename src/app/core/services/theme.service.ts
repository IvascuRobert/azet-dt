import { Injectable, RendererFactory2, Renderer2, Inject } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { EnumLocalStorageKeysName } from 'src/app/shared/enums.enum';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private _mainTheme$: BehaviorSubject<string> = new BehaviorSubject('theme-default');
    private _darkMode$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    darkMode$: Observable<boolean> = this._darkMode$.asObservable();

    private _renderer: Renderer2;
    private head: HTMLElement;
    private themeLinks: HTMLElement[] = [];

    theme$: Observable<[string, boolean]>;

    constructor(
        rendererFactory: RendererFactory2,
        @Inject(DOCUMENT) document: Document
    ) {
        this.head = document.head;
        this._renderer = rendererFactory.createRenderer(null, null);
        this.theme$ = combineLatest([this._mainTheme$, this._darkMode$]);
        this.theme$.subscribe(async ([mainTheme, darkMode]) => {
            const cssExt = '.css';
            const cssFilename = darkMode ? mainTheme + '-dark' + cssExt : mainTheme + cssExt;
            await this.loadCss(cssFilename);
            if (this.themeLinks.length == 2)
                this._renderer.removeChild(this.head, this.themeLinks.shift());
        })
    }

    setMainTheme(name: string): void {
        this._mainTheme$.next(name);
    }

    setDarkMode(value: boolean): void {
        this._darkMode$.next(value);
    }

    private async loadCss(filename: string) {
        return new Promise(resolve => {
            const linkEl: HTMLElement = this._renderer.createElement('link');
            this._renderer.setAttribute(linkEl, 'rel', 'stylesheet');
            this._renderer.setAttribute(linkEl, 'type', 'text/css');
            this._renderer.setAttribute(linkEl, 'href', filename);
            this._renderer.setProperty(linkEl, 'onload', resolve);
            this._renderer.appendChild(this.head, linkEl);
            this.themeLinks = [...this.themeLinks, linkEl];
        })
    }

    storeTheme(darkMode: boolean): boolean {
        try {
            return window.localStorage[EnumLocalStorageKeysName.THEME] = darkMode;
        } catch { }
    }

    getStoredThemeMode(): boolean {
        try {
            return JSON.parse(window.localStorage[EnumLocalStorageKeysName.THEME]) || false;
        } catch {
            return null;
        }
    }

    clearStorage(): void {
        try {
            window.localStorage.removeItem(EnumLocalStorageKeysName.THEME);
        } catch { }
    }
}
