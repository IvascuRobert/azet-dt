import { DataServiceError } from "ngrx-data";
import { CartProductClass } from "./classes.class";
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
    products: CartProductClass[];
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

export interface IAnimationOptions {
    /**
     * Name of the animation anchor that will be used in a template
     */
    anchor?: string;
    /**
     * Duration in ms
     */
    duration?: number;
    /**
     * Delay in ms
     *
     * Default: 0
     */
    delay?: number;
    /**
     * This parameter can only be set in a component's decorator.
     * Cannot be set in a template.
     *
     * Whether children animation should run 'before', 'together' or 'after' animation.
     * When set to 'none' chldren are not animated.
     *
     * Default: 'together'
     */
    animateChildren?: 'before' | 'together' | 'after' | 'none';
}

export interface IAttentionSeekerAnimationOptions extends IAnimationOptions {
    /**
     * Indicates the direction of the state change expression in attention seekers.
     *
     * <=> is bidirectional (triggers whenever the state changes)
     * => unidirectional (triggers whenever the state changes from false to true)
     *
     * Cannot be dynamic
     */
    direction?: '<=>' | '=>';
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
