<template>
    <ul class="Calendar-style">
        <a-button tag="li" :to="linkMonth" :active="activeMonth">Monat</a-button>
        <a-button tag="li" :to="linkWeek" :active="activeWeek">Woche</a-button>
        <a-button tag="li" :to="linkDay" :active="activeDay">Tag</a-button>
    </ul>
</template>

<script>
    import moment from 'moment';
    import { mapGetters } from 'vuex';
    import * as calendarGetters from '../core/store/calendar/types/getters';

    import AButton from './atoms/AButton.vue';

    export default {
        name: 'CalendarStyle',

        components: {
            AButton,
        },

        computed: {
            ...mapGetters({
                firstDay: calendarGetters.FIRST_DAY,
            }),

            linkMonth() {
                const date = this.firstDay.clone();

                return {
                    name  : 'month',
                    params: {
                        year : date.year(),
                        month: date.month(),
                    },
                };
            },
            linkWeek() {
                const today = moment();
                const date  = this.firstDay.clone();

                if(today.month() === date.month()) {
                    date.week(today.week());
                }
                else {
                    date.date(1);
                }

                return {
                    name  : 'week',
                    params: {
                        year: date.year(),
                        week: date.week(),
                    },
                };
            },
            linkDay() {
                const today = moment();
                const date  = this.firstDay.clone();

                if(today.month() === date.month()) {
                    date.weekday(today.weekday());
                }
                else {
                    date.date(1);
                }

                return {
                    name  : 'day',
                    params: {
                        year : date.year(),
                        month: date.month(),
                        day  : date.date(),
                    },
                };
            },

            activeMonth() {
                return this.$route.name === 'month';
            },
            activeWeek() {
                return this.$route.name === 'week';
            },
            activeDay() {
                return this.$route.name === 'day';
            },
        },
    }
</script>
