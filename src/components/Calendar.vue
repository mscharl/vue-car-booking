<script>
    import moment from 'moment';
    import { mapGetters } from 'vuex';
    import * as CalendarGetters from '../core/store/calendar/types/getters';

    import Week from './Week.vue';
    import CalendarTransition from './transitions/CalendarTransition.vue';

    export default {
        name: 'Calendar',

        components: {
            CalendarTransition,
            Week,
        },

        computed: {
            ...mapGetters({
                firstDay: CalendarGetters.FIRST_DAY,
            }),

            calendarComponent() {
                switch(this.$route.name) {
                    case 'week':
                        return 'Week';
                    default:
                        throw new Error('UNSUPPORTED ROUTE');
                }
            },
        },

        render(createElement) {
            const route = this.$route;

            return createElement('calendar-transition', [
                createElement(this.calendarComponent, {
                    key  : route.path,
                    props: {
                        firstDay: this.firstDay.clone(),
                    },
                })
            ]);
        },
    }
</script>
