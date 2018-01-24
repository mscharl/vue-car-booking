<template>
    <ul class="Calendar-nav">
        <a-icon-button icon="arrow_back" tag="li" :to="prevLink">Prev</a-icon-button>
        <a-button tag="li" :to="todayLink">{{ todayText }}</a-button>
        <a-icon-button icon="arrow_forward" tag="li" :to="nextLink">Next</a-icon-button>
    </ul>
</template>

<script>
    import moment from 'moment';
    import { mapGetters } from 'vuex';
    import * as calendarGetters from '../core/store/calendar/types/getters';
    import AButton from './atoms/AButton.vue';
    import AIconButton from './atoms/AIconButton.vue';

    const TODAY_TEXT = {
        month: 'Diesen Monat',
        week : 'Diese Woche',
        day  : 'Heute',
    };

    export default {
        name: 'CalendarNav',

        components: {
            AIconButton,
            AButton,
        },

        computed: {
            ...mapGetters({
                firstDay    : calendarGetters.FIRST_DAY,
                nextFirstDay: calendarGetters.NEXT_FIRST_DAY,
                prevFirstDay: calendarGetters.PREV_FIRST_DAY,
            }),

            todayText() {
                return TODAY_TEXT[this.$route.name];
            },

            prevLink() {
                return {
                    name  : this.$route.name,
                    params: this.getLinkParams(this.prevFirstDay),
                }
            },
            nextLink() {
                return {
                    name  : this.$route.name,
                    params: this.getLinkParams(this.nextFirstDay),
                }
            },
            todayLink() {
                return {
                    name  : this.$route.name,
                    params: this.getLinkParams(moment()),
                }
            },
        },

        methods: {

            getLinkParams(date) {
                switch(this.$route.name) {
                    case 'month':
                        return {
                            year : date.year(),
                            month: date.month(),
                        };

                    case 'week':
                        return {
                            year: date.year(),
                            week: date.week(),
                        };

                    case 'day':
                        return {
                            year : date.year(),
                            month: date.month(),
                            day  : date.date(),
                        };

                    default:
                        console.warn('UNSUPPORTED ROUTE');
                }
            },
        },
    }
</script>
