import Vue from 'vue';
import VueRouter from 'vue-router';
import Calendar from '../components/Calendar.vue';
import Empty from '../components/Empty.vue';

import * as FILTER from './router/filter';


// Enable Plugin
Vue.use(VueRouter);


export default new VueRouter({
    // mode  : 'history',
    routes: [
        {
            name      : 'month',
            path      : '/:year-:month',
            components: {
                // calendar: Calendar,
                calendar: Empty,
            },
        }, {
            name       : 'week',
            path       : '/:year\::week',
            beforeEnter: FILTER.ValidateWeek,
            components : {
                calendar: Calendar,
            },
        }, {
            name      : 'day',
            path      : '/:year-:month-:day',
            components: {
                // calendar: Calendar,
                calendar: Empty,
            },
        }, {
            path       : '*',
            beforeEnter: FILTER.RedirectToDefault,
        },
    ],
});
