<template>
    <section class="Month">
        <ul class="Month__weeks">
            <li class="Month__week" v-once>
                <ul class="Month__days">
                    <li class="Month__day Month__day--header" v-for="day in weeks[0]">
                        {{ day.format('dddd') }}
                    </li>
                </ul>
            </li>
            <li class="Month__week" v-for="days in weeks">
                <ul class="Month__days">
                    <li class="Month__day"
                        :class="{'Month__day--current': isCurrentMonth(day), 'Month__day--today': isToday(day)}"
                        v-for="day in days"
                    >
                        <span class="Month__day__date">{{ day.format('Do') }}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'Month',

        props: {
            firstDay: {
                type    : moment,
                required: true,
            },
        },

        computed: {
            weeks() {
                const firstWeek = this.firstDay.week();
                const lastWeek  = this.firstDay.clone().endOf('month').week();
                const weekCount = (lastWeek - firstWeek) + 1;

                return Array
                    .apply(null, { length: weekCount })
                    .map(Number.call, Number)
                    .map((index) => index + firstWeek)
                    .map((numberOfWeek) => {
                        return [0, 1, 2, 3, 4, 5, 6].map((numberOfDay) => this.firstDay.clone().week(numberOfWeek).weekday(numberOfDay));
                    });
            },
        },

        methods: {
            /**
             *
             * @param {moment.Moment} day
             * @return {Boolean}
             */
            isCurrentMonth(day) {
                return day.isSame(this.firstDay, 'month');
            },

            /**
             *
             * @param {moment.Moment} day
             * @return {Boolean}
             */
            isToday(day) {
                return day.isSame(moment(), 'day');
            },
        },
    }
</script>

<style lang="scss">
    @import "../scss/variables";




    .Month {
        width: 100%;
        height: 100%;

        overflow: auto;

        &__weeks {
            display: flex;
            flex-direction: column;

            margin: 0;
            padding: 0;
            list-style: none;
        }

        &__week {
            display: contents;
        }

        &__days {
            display: flex;
            flex-direction: row;

            margin: 0;
            padding: 0;
            list-style: none;
        }

        &__day {
            position: relative;
            flex: 0 0 (100% / 7);

            border-right: 1px solid color('border', 'dark');
            border-bottom: 1px solid color('border', 'dark');

            padding: .4em;

            min-height: 8.9vw;

            &--header {
                min-height: 0;

                font-size: 2.4rem;
                border-right: none;
            }

            &__date {
                position: absolute;
                top: .4em;
                right: .4em;

                font-size: 1.4rem;
                font-weight: 400;

                opacity: .4;

            }

            &--today &__date {
                color: color('secondary');
            }
            &--current &__date {
                opacity: 1;
            }
        }
    }
</style>
