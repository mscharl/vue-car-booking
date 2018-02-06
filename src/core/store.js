import Vue from 'vue';
import Vuex from 'vuex';

import calendar from './store/calendar';
import bookings from './store/bookings';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        calendar,
        bookings,
    },
});
