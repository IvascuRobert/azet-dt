import { Injectable } from '@angular/core';
import { EnumLocalStorageKeysName } from 'src/app/shared/enums.enum';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  storeValue(value: any, key: EnumLocalStorageKeysName): void {
    try {
      window.localStorage[key] = value;
    } catch { }
  }

  getStorageValueByKey(key: EnumLocalStorageKeysName): any {
    try {
      return window.localStorage[key] || null;
    } catch {
      return null;
    }
  }

  clearStorageByKey(key: EnumLocalStorageKeysName): void {
    try {
      window.localStorage.removeItem(key);
    } catch { }
  }
}
