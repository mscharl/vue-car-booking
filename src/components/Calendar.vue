<script>
    import moment from 'moment';
    import { mapGetters } from 'vuex';
    import * as CalendarGetters from '../core/store/calendar/types/getters';

    import Days from './Days.vue';
    import Day from './Day.vue';
    import CalendarTransition from './transitions/CalendarTransition.vue';

    export default {
        name: 'Calendar',

        components: {
            CalendarTransition,
            Day,
            Days,
        },

        computed: {
            ...mapGetters({
                firstDay: CalendarGetters.FIRST_DAY,
            }),

            calendarComponent() {
                switch(this.$route.name) {
                    case 'day':
                        return 'Day';
                    case 'week':
                        return 'Days';
                    default:
                        throw new Error('UNSUPPORTED ROUTE');
                }
            },
        },

        render(createElement) {
            const route = this.$route;
            const key   = btoa(`${route.path}__${this._uid}`);

            return createElement('calendar-transition', [
                createElement(this.calendarComponent, {
                    key,
                    props: {
                        firstDay: this.firstDay.clone(),
                    },
                })
            ]);
        },
    }
</script>
