<script>
    import moment from 'moment';
    import { mapGetters } from 'vuex';
    import * as CalendarGetters from '../core/store/calendar/types/getters';

    import Week from './Week.vue';
    import { firstDayFromRoute } from '../helper';

    export default {
        name: 'Calendar',

        components: {
            Week,
        },

        data() {
            return {
                transitionName: 'fade',
            };
        },

        beforeRouteUpdate(to, from, next) {
            if(to.name !== from.name) {
                this.transitionName = 'fade';
            }
            else {
                const firstFrom = firstDayFromRoute(from);
                const firstTo   = firstDayFromRoute(to);

                this.transitionName = firstFrom < firstTo ? 'next-calendar' : 'prev-calendar';
            }

            next();
        },

        computed: {
            ...mapGetters({
                firstDay: CalendarGetters.FIRST_DAY,
            }),

            calendarComponent() {
                switch(this.$route.name) {
                    case 'week':
                        return 'Week'
                }
            },
        },

        render(createElement) {
            const route = this.$route;

            return createElement('transition', {
                props: {
                    name  : this.transitionName,
                    mode  : 'out-in',
                    appear: true,
                },
            }, [
                createElement(this.calendarComponent, {
                    key  : route.path,
                    props: {
                        firstDay: this.firstDay.clone(),
                    },
                }),
            ]);
        },
    }
</script>
