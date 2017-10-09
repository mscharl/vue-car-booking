<template>
    <div id="app">
        <ul class="Display Display--week" v-if="showDayCalendar" key="dayCalendar">
            <li class="Display__day" v-for="day in daysOfTheWeek">
                <calendar-day :day="day"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import moment from 'moment';
    import CalendarDay from './components/Calendar/CalendarDay.vue';

    window._moment = moment;

    const DISPLAY_TYPE = {
        DAY  : 'day',
        WEEK : 'week',
        MONTH: 'month',
    };

    export default {
        name      : 'VueCarBooking',
        components: {
            CalendarDay,
        },
        data() {
            return {
                display: DISPLAY_TYPE.DAY,
            }
        },

        computed: {
            showDayCalendar() {
                return this.display === DISPLAY_TYPE.DAY;
            },

            daysOfTheWeek() {
                return [1, 2, 3, 4, 5, 6, 7].map((day) => moment()
                    .isoWeekday(day));
            },
        },
    }
</script>

<style lang="scss">
    .Display {
        display: flex;

        margin: 0;
        padding: 0;
        list-style-type: none;

        width: 100vw;
        height: 100vh;

        &--week {
            flex-direction: row;
        }

        &__day {
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: #{100%/7};

            border-right: 1px solid rgba(0, 0, 0, .15);
        }
    }
</style>
