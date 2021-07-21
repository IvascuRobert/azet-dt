import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { EnumCarCategory, EnumState } from './enums.enum';

export class ProductClass {
    id: string;
    name: string;
    description?: string;
    producer: string;
    price: number;
    quantity: number;
    size: string;
    profile: string;
    image?: string;
    carCategories: EnumCarCategory[];
    state: EnumState;

    // Normal signature with defaults
    constructor(
        id = null,
        name = '',
        description = '',
        producer = '',
        price = null,
        quantity = null,
        size = '',
        profile = '',
        image = '',
        carCategories = null,
        state = null,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.producer = producer;
        this.price = price;
        this.quantity = quantity;
        this.size = size;
        this.profile = profile;
        this.image = image;
        this.carCategories = carCategories;
        this.state = state;
    }
}

export class CartProductClass extends ProductClass {
    nbOfProducts: number;
}

export class CustomErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

        return (invalidCtrl || invalidParent);
    }
}