import { EventEmitter, Injectable } from '@angular/core';
import { EnumLocalStorageKeysName } from 'src/app/shared/enums.enum';
import { ISiteTheme } from 'src/app/shared/interfaces.interface';

@Injectable()
export class ThemeService {

    onThemeUpdate: EventEmitter<ISiteTheme> = new EventEmitter<ISiteTheme>();

    /**
     * Set the stylesheet with the specified key.
     */
    setStyle(key: string, href: string) {
        getLinkElementForKey(key).setAttribute('href', href);
    }

    /**
     * Remove the stylesheet with the specified key.
     */
    removeStyle(key: string) {
        const existingLinkElement = getExistingLinkElementByKey(key);
        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }

    storeTheme(theme: ISiteTheme): void {
        try {
            window.localStorage[EnumLocalStorageKeysName.THEME] = theme.name;
        } catch { }

        this.onThemeUpdate.emit(theme);
    }

    getStoredThemeName(): string | null {
        try {
            return window.localStorage[EnumLocalStorageKeysName.THEME] || null;
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

function getLinkElementForKey(key: string) {
    return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string) {
    return document.head.querySelector(`link[rel="stylesheet"].${getClassNameForKey(key)}`);
}

function createLinkElementWithKey(key: string) {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
}

function getClassNameForKey(key: string) {
    return `style-manager-${key}`;
}
