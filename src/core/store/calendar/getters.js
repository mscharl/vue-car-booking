import moment from 'moment';

import * as types from './types/getters';

export default {

    [types.FIRST_DAY](state, getters, rootState) {
        const route  = rootState.route;
        const params = route.params;

        switch(route.name) {
            case 'week':
                return moment().year(params.year).week(params.week).weekday(0);

            default:
                return moment();
        }
    },
}
