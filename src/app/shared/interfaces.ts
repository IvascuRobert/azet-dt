export interface IUserLogin {
    email: string;
    password: string;
}

export interface IProductData{
    name: string;
    description: string;
    price: number;
    quantity: number;
    storehouse: any;
    backorderLimit: number;
    backordered ;
    image?: string;
    id: string;
}
