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
                type    : moment.Moment,
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
