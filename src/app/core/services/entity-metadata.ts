import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    Product: {},
    Cart: {},
};

// because the plural of "hero" is not "heros"
const pluralNames = { Product: 'Products' };

export const entityConfig = {
    entityMetadata,
    pluralNames
};
