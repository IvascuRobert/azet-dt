import { DaysOfWeek } from "src/app/types/interface/days-of-week";



export const azetDTGoogleMapsLocation = `https://www.google.com/maps/place/Azet+DT+Resapare+
                                         Anvelope+Camion+SRL/@45.6575573,25.641716,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x40b35c6b2de4023d
                                         :0x1b5da9eebf44f902!2sAzet+DT+Resapare+Anvelope+Camion+SRL!8m2!3d45.6575587!4d25.6439095!3m4!
                                         1s0x40b35c6b2de4023d:0x1b5da9eebf44f902!8m2!3d45.6575587!4d25.6439095`;

export const daysOfWeeks: DaysOfWeek = {
    workDays: [
        {
            value: 1,
            label: 'Luni',
            icon: 'check_circle_outline',
            timeRange: '08 – 17'
        },
        {
            value: 2,
            label: 'Marți',
            icon: 'check_circle_outline',
            timeRange: '08 – 17'
        },
        {
            value: 3,
            label: 'Miercuri',
            icon: 'check_circle_outline',
            timeRange: '08 – 17'
        },
        {
            value: 4,
            label: 'Joi',
            icon: 'check_circle_outline',
            timeRange: '08 – 17'
        },
        {
            value: 5,
            label: 'Vineri',
            icon: 'check_circle_outline',
            timeRange: '08 – 17'
        },
    ],
    weekend: [
        {
            value: 6,
            label: 'Sâmbătă',
            icon: 'highlight_off',
            timeRange: 'Închis'
        },
        {
            value: 0,
            label: 'Duminică',
            icon: 'highlight_off',
            timeRange: 'Închis'
        }
    ]
};
