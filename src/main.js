import Vue from 'vue';
import App from './App.vue';
import moment from 'moment';
import 'moment/locale/de-at';

moment.locale('de-at');

new Vue({
    el    : '#app',
    render: h => h(App),
});
