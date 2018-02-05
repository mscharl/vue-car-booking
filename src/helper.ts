import * as moment from 'moment';
import { Route } from 'vue-router';
import { Dictionary } from 'vuex';

/**
 * Calculate the first day based on the given route
 *
 * @param route
 *
 * @return {moment.Moment}
 */
export function firstDayFromRoute(route: Route): moment {
    const params: Dictionary<number> = route.params;

    switch(route.name) {
        case 'month':
            return moment()
                .year(params.year)
                .month(params.month)
                .date(1);

        case 'week':
            return moment()
                .year(params.year)
                .week(params.week)
                .weekday(0);

        case 'day':
            return moment()
                .year(params.year)
                .month(params.month)
                .date(params.day);

        default:
            throw new Error('UNSUPPORTED ROUTE');
    }
}
