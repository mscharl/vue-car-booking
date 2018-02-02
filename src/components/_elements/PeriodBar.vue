<template>
    <div class="PeriodBar">
        <div class="PeriodBar__day" v-for="day in days">
            <div class="PeriodBar__hour" v-for="hour in 24">
                <div class="PeriodBar__quarter-wrapper">
                    <div class="PeriodBar__quarter" v-for="quarter in 4" :class="availabilityClassFor(day, hour, quarter)"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'PeriodBar',

        // Define available component properties
        props: {
            'start-date': {
                type    : [Date, Number],
                required: true,
            },
            'end-date'  : {
                type    : [Date, Number],
                required: true,
            },
        },

        // Components that are used in this component
        components: {},

        // Hook to create the initial data object
        data() {
            return {}
        },

        // This object defines all computed properties of this component
        computed: {
            start() {
                return moment(this.startDate)
            },
            end() {
                return moment(this.endDate)
            },

            days() {
                return Math.ceil(this.end.diff(this.start, 'days', true));
            },
        },

        // All instance methods are place here
        methods: {
            availabilityClassFor(day, hour, quarter) {
                const checkDate = this.start
                                      .clone()
                                      .startOf('day')
                                      .add(day - 1, 'days')
                                      .add(hour - 1, 'hours')
                                      .add(quarter * 15, 'minutes');

                const isReserved = checkDate.isBetween(this.start, this.end, null, '(]');

                return {
                    'PeriodBar__quarter--reserved': isReserved,
                };
            },
        },
    }
</script>