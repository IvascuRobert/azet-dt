import { Injectable } from '@angular/core';
import {
    DefaultHttpUrlGenerator,
    HttpResourceUrls,
    normalizeRoot
} from '@ngrx/data';

@Injectable()
export class CustomHttpUrlGenerator extends DefaultHttpUrlGenerator {
    protected getResourceUrls(
        entityName: string,
        root: string
    ): HttpResourceUrls {
        let resourceUrls = this.knownHttpResourceUrls[entityName];
        if (!resourceUrls) {
            const nRoot = normalizeRoot(root);
            const url = `${nRoot}/${entityName}/`.toLowerCase();
            resourceUrls = {
                entityResourceUrl: url,
                collectionResourceUrl: url
            };
            this.registerHttpResourceUrls({ [entityName]: resourceUrls });
        }
        return resourceUrls;
    }
}