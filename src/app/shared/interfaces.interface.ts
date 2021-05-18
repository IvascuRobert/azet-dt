
export interface IUserLogin {
    email: string;
    password: string;
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
    value: string,
    label: string,
    disabled?: boolean;
}
