import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Week from './components/Week.vue';

import moment from 'moment';
import 'moment/locale/de-at';

moment.locale('de-at');

Vue.use(VueRouter);

const ensureDateParameters = (to, from, next) => {
    const { year = moment().year(), week = moment().isoWeek() } = to.params;

    const date = moment().year(year).isoWeek(week);

    if(!to.params.year || !to.params.week) {
        next({
            name  : 'calendar',
            params: {
                year: date.year(),
                week: date.isoWeek(),
            },
        });
    }
    else if(to.params.year !== date.year() || to.params.week !== date.isoWeek()) {
        next({
            name  : 'calendar',
            params: {
                year: date.year(),
                week: date.isoWeek(),
            },
        });
    }
    else {
        next();
    }
};
const currentWeek = (year, week) => moment().year(year).week(week).isoWeekday(1);

const router = new VueRouter({
    routes: [
        {
            name       : 'calendar',
            path       : '/:year/:week',
            components : {
                calendar: Week,
            },
            props      : {
                calendar: (route) => ({
                        firstDay: currentWeek(route.params.year, route.params.week),
                }),
            },
            beforeEnter: ensureDateParameters,
        }, {
            path       : '',
            beforeEnter: ensureDateParameters,
        },
    ],
});

new Vue({
    name  : 'VueCarBooking',
    el    : '#app',
    render: h => h(App),

    router,
});
