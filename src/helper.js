import moment from 'moment';

/**
 * Calculate the first day based on the given route
 *
 * @param route
 *
 * @return {moment.Moment}
 */
export const firstDayFromRoute = (route) => {
    const params = route.params;

    switch(route.name) {
        case 'week':
            return moment()
                .year(params.year)
                .week(params.week)
                .weekday(0);

        default:
            console.warn('UNSUPPORTED ROUTE');
            return moment();
    }
};
