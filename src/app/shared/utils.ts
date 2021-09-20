import { ISelect } from "./interfaces.interface";

export const azetDTGoogleMapsLocation = `https://www.google.com/maps/place/Azet+DT+Resapare+
                                         Anvelope+Camion+SRL/@45.6575573,25.641716,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x40b35c6b2de4023d
                                         :0x1b5da9eebf44f902!2sAzet+DT+Resapare+Anvelope+Camion+SRL!8m2!3d45.6575587!4d25.6439095!3m4!
                                         1s0x40b35c6b2de4023d:0x1b5da9eebf44f902!8m2!3d45.6575587!4d25.6439095`;

export const azetDtMenuHeaderItems: ISelect[] = [
    {
        label: 'ACASĂ',
        value: 'home',
        routerLink: '/home',
        icon: 'home',
    }, {
        label: 'ANVELOPE',
        value: 'tires',
        routerLink: '/products',
        icon: 'support',
    }, {
        label: 'CONTACT',
        value: 'contact',
        routerLink: '/contact',
        icon: 'contact_page',
    }, {
        label: 'COȘ',
        value: 'cart',
        routerLink: '/cart',
        icon: 'shopping_cart',
    }
];