
export interface IUserLogin {
    email: string;
    password: string;
}

export interface ISize {
    width: number;
    crossSection: number;
    diameter: number;
    loadOrSpeed: number;
}

export interface IFilterFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}

export class IFilterNode {
    children?: IFilterNode[];
    name: string;
    id: string;
}
