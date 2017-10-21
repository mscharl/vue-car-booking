import Vue from 'vue';
import { sync as storeRouterSync } from 'vuex-router-sync';
// Import Core Components
import router from './core/router';
import store from './core/store';
// Import the App Component
import App from './App.vue';
// Initialize moment.js
import moment from 'moment';
import 'moment/locale/de-at';

moment.locale('de-at');


// Sync store with router
storeRouterSync(store, router);

// Initialize the app
new Vue({
    name  : 'App',
    el    : '#app',
    render: (h) => h(App),

    router,
    store,
});
