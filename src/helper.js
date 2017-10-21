import moment from 'moment';

export const firstDayFromRoute = (route) => {
    const params = route.params;

    switch(route.name) {
        case 'week':
            return moment().year(params.year).week(params.week).weekday(0);

        default:
            return moment();
    }
};
