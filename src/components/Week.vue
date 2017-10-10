<template>
    <section class="Week">
        <header class="Week__row Week__row--header">
            <div class="Week__column Week__column--time"></div>
            <section class="Week__column" v-for="day in days">
                <div class="Week__day-name">
                    {{ day.format('dddd') }}
                </div>
                <div class="Week__day-date" :class="{'Week__day-date--today': dayIsToday(day)}">
                    {{ day.format('D') }}
                </div>
            </section>
        </header>
        <div class="Week__scroller">
            <section class="Week__row Week__row--content">
                <div class="Week__column Week__column--time">
                    <div class="Week__hour" v-for="hour in hours">
                        {{ formattedHourFor(hour) }}
                    </div>
                </div>
                <section class="Week__column" v-for="day in days">
                    <div class="Week__hour Week__hour--show-half-line" v-for="hour in hoursForDay(day)"></div>
                </section>
            </section>
        </div>
    </section>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'Week',

        data() {
            return {}
        },

        computed: {
            days() {
                return [1, 2, 3, 4, 5, 6, 7].map((day) => moment().isoWeekday(day));
            },

            hours() {
                return Array.apply(null, { length: 24 })
                            .map(Number.call, Number);
            },
        },

        methods: {
            dayIsToday(day) {
                return day.isSame(moment(), 'day');
            },

            hoursForDay(day) {
                return this.hours
                           .map((hour) => day.clone().hours(hour).minutes(0))
            },

            formattedHourFor(hour) {
                return moment().hours(hour).minutes(0).format('HH:mm');
            },
        },
    }
</script>

<style lang="scss">
    @import '../../scss/variables';




    .Week {
        display: flex;

        flex-direction: column;

        width: 100%;
        height: 100%;

        &__row {
            display: flex;
            flex-direction: row;

            flex-shrink: 0;

            width: 100%;

            font-size: 1.6rem;

            &--header {
                border-bottom: 1px solid color('border', 'dark');
            }
        }

        &__scroller {
            overflow: auto;
            flex: 1 1 100%;

            will-change: transform;
        }

        &__day-date {
            display: inline-block;
            font-size: 3.5em;

            transform: translateX(-.08em);

            &--today {
                color: color('secondary');
            }

        }

        &__row--content &__column {
            border-right: 1px solid color('border');

            &:last-child {
                border: none;
            }
        }

        &__column {
            flex-grow: 1;
            flex-shrink: 1;
            flex-basis: #{100%/7};

            font-size: 1.4rem;

            transition: all .2s ease-out;

            &--time {
                flex: 0 0 4em;
                text-align: right;
            }
        }

        &__hour {
            height: $one-hour-height;

            position: relative;

            border-bottom: 1px solid color('border');
            padding: 0 .375em;

            &:nth-child(odd) {
                background-color: color('border', 'light');
            }

            &--show-half-line {
                &:after {
                    display: block;
                    content: '';

                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;

                    border-top: 1px dotted color('border');
                }
            }
        }
    }
</style>
