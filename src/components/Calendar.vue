<script>
    import moment from 'moment';

    import Week from './Week.vue';

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
            const firstFrom = this.firstDayByParams(from);
            const firstTo   = this.firstDayByParams(to);

            this.transitionName = firstFrom < firstTo ? 'next-calendar' : 'prev-calendar';

            next();
        },

        computed: {
            firstDay() {
                return this.firstDayByParams(this.$route);
            },

            calendarComponent() {
                switch(this.$route.name) {
                    case 'week':
                        return 'Week'
                }
            },
        },

        methods: {
            firstDayByParams(route) {
                const params = route.params;
                switch(route.name) {
                    case 'week':
                        return moment().year(params.year).week(params.week).weekday(0);

                    default:
                        return 0;
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
