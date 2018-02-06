import * as moment from 'moment';
import { Route } from 'vue-router';

/**
 * Calculate the first day based on the given route
 *
 * @param route
 *
 * @return {moment.Moment}
 */
export function firstDayFromRoute(route: Route): moment.Moment {
    const year  = parseInt(route.params.year, 10);
    const month = parseInt(route.params.month, 10);
    const week  = parseInt(route.params.week, 10);
    const day   = parseInt(route.params.day, 10);

    switch(route.name) {
        case 'month':
            return moment()
                .year(year)
                .month(month)
                .date(1);

        case 'week':
            return moment()
                .year(year)
                .week(week)
                .weekday(0);

        case 'day':
            return moment()
                .year(year)
                .month(month)
                .date(day);

        default:
            throw new Error('UNSUPPORTED ROUTE');
    }
}
