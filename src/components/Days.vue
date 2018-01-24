<template>
    <section class="Days">
        <header class="Days__row Days__row--header">
            <div class="Days__column Days__column--time"></div>
            <section class="Days__column" v-for="day in days">
                <day-header :day="day"></day-header>
            </section>
        </header>
        <div class="Days__scroller">
            <section class="Days__row Days__row--content">
                <div class="Days__column Days__column--time">
                    <div class="Days__hour" v-for="hour in hours">
                        {{ formattedHourFor(hour) }}
                    </div>
                </div>
                <section class="Days__column" v-for="day in days">
                    <day-times :day="day"></day-times>
                </section>
            </section>
        </div>
    </section>
</template>

<script>
    import moment from 'moment';
    import DayHeader from './DayHeader.vue';
    import DayTimes from './DayTimes.vue';

    export default {
        name: 'Days',

        props: {
            firstDay: {
                type   : moment,
                default: () => moment(),
            },
            display : {
                type   : String,
                default: 'week',
                validator(value) {
                    return ['week', 'single'].indexOf(value) !== -1
                },
            },
        },

        components: {
            DayHeader,
            DayTimes,
        },

        data() {
            return {}
        },

        computed: {
            days() {
                switch(this.display) {
                    case 'week':
                        return [0, 1, 2, 3, 4, 5, 6].map((day) => this.firstDay.clone().weekday(day));

                    case 'single':
                        return [this.firstDay.clone()];

                    default:
                        throw new Error('Unhandled display type')
                }
            },

            hours() {
                return Array.apply(null, { length: 24 })
                            .map(Number.call, Number);
            },
        },

        methods: {
            formattedHourFor(hour) {
                return moment().hours(hour).minutes(0).format('HH:mm');
            },
        },
    }
</script>
