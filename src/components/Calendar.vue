<script>
    import moment from 'moment';
    import { mapGetters, mapActions } from 'vuex';
    import * as CalendarGetters from '../core/store/calendar/types/getters';
    import * as BookingsActions from '../core/store/bookings/types/actions';

    import AFloatingButton from './atoms/AFloatingButton.vue';
    import CalendarTransition from './transitions/CalendarTransition.vue';
    import Day from './Day.vue';
    import Days from './Days.vue';
    import Month from './Month.vue';

    export default {
        name: 'Calendar',

        components: {
            AFloatingButton,
            CalendarTransition,
            Day,
            Days,
            Month,
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
                    case 'month':
                        return 'Month';
                    default:
                        throw new Error('UNSUPPORTED ROUTE');
                }
            },
        },

        methods: {
            ...mapActions({
                addBooking: BookingsActions.CREATE_NEW_BOOKING,
            })
        },

        render(createElement) {
            const route = this.$route;
            const key   = btoa(`${route.path}__${this._uid}`);

            return createElement('div', { 'class': 'Calendar' }, [
                createElement('div', {
                    'class': 'Calendar__element',
                }, [
                    createElement('calendar-transition', [
                        createElement(this.calendarComponent, {
                            key,
                            props: {
                                firstDay: this.firstDay.clone(),
                            },
                        }),
                    ]),
                ]), createElement('div', {
                    'class': 'Calendar__floating-button',
                }, [
                    createElement('a-floating-button', {
                        props: { icon: 'add' },
                        on   : {
                            click: this.addBooking,
                        },
                    }),
                ]),
            ]);
        },
    }
</script>
