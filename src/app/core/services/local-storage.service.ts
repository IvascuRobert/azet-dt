import { Injectable } from '@angular/core';
import { LocalStorageKey } from 'src/app/shared/enum/local-storage-key';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  storeValue(value: any, key: LocalStorageKey): void {
    try {
      window.localStorage[key] = value;
    } catch { }
  }

  getStorageValueByKey(key: LocalStorageKey): any {
    try {
      return window.localStorage[key] || null;
    } catch {
      return null;
    }
  }

  clearStorageByKey(key: LocalStorageKey): void {
    try {
      window.localStorage.removeItem(key);
    } catch { }
  }
}
