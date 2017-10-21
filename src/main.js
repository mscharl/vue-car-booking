import Vue from 'vue';
// Import Core Components
import router from './core/router';
// Import the App Component
import App from './App.vue';
// Initialize moment.js
import moment from 'moment';
import 'moment/locale/de-at';

moment.locale('de-at');


// Initialize the app
new Vue({
    name  : 'App',
    el    : '#app',
    render: (h) => h(App),

    router,
});
