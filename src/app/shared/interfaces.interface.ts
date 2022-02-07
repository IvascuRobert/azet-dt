import { DataServiceError } from "ngrx-data";
import { ProductClass } from "./classes.class";
import { EnumMessageType } from "./enums.enum";

export interface IUserLogin extends DataServiceError {
    id?: string;
    email?: string;
    password?: string;
    accessToken?: string;
    firstName?: string;
    lastName?: string;
}

export interface IFilterFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}

export interface IFilterNode {
    children?: IFilterNode[];
    name: string;
    id: string;
}

export interface ISelect {
    value: string;
    label: string;
    disabled?: boolean;
    routerLink?: string;
    icon?: string;
}

export interface ICart {
    products: ProductClass[];
    totalProducts: number;
    totalPrice: number;
}

export interface IMessage {
    type: EnumMessageType;
    message: string;
}

export interface IPatterns {
    msg: string;
    regExp: RegExp;
}

export interface IDaysOfWeek {
    workDays: IDay[];
    weekend: IDay[];
}

export interface IDay {
    label: string,
    value: number,
    icon?: string,
    timeRange?: string
}

export interface IProductOptions{
    showAddButton?: boolean,
    showRemoveButton?: boolean
}