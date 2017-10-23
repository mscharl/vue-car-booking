<script>
    import { mapGetters } from 'vuex';
    import * as calendarTypes from '../core/store/calendar/types/getters';

    import CalendarTransition from './transitions/CalendarTransition.vue';


    export default {
        name: 'CurrentDateRange',

        components: {
            CalendarTransition,
        },

        computed: {
            ...mapGetters({
                firstDay: calendarTypes.FIRST_DAY,
            })
        },

        render(createElement) {
            const date = (() => {
                const startDate = this.firstDay.clone();

                switch(this.$route.name) {
                    case 'week':
                        const fullFormat = 'Do MMMM YYYY';
                        let endDate      = startDate.clone().weekday(6);
                        let endString    = endDate.format(fullFormat);

                        if(startDate.year() !== endDate.year()) {
                            return `${startDate.format(fullFormat)} - ${endString}`;
                        }
                        else if(startDate.month() !== endDate.month()) {
                            return `${startDate.format('Do MMMM')} - ${endString}`;
                        }
                        else {
                            return `${startDate.format('Do')} - ${endString}`;
                        }
                        break;

                    default:
                        throw new Error('Invalid route');
                }
            })();

            return createElement('calendar-transition', [
                createElement('span', { key: date }, date),
            ]);
        },
    }
</script>
