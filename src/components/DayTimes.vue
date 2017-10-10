<template>
    <section class="Day-times">
        <div class="Day-times__hour" v-for="hour in hours"></div>

    </section>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'DayTimes',

        props: {
            day: {
                type    : moment,
                required: true,
            },
        },

        computed: {
            hours() {
                return Array.apply(null, { length: 24 })
                            .map(Number.call, Number)
                            .map((hour) => this.day.clone().hours(hour).minutes(0))
            },
        },

        methods: {},
    }
</script>

<style lang="scss">
    @import "../../scss/variables";




    .Day-times {
        &__hour {
            height: $one-hour-height;

            position: relative;

            border-bottom: 1px solid color('border');
            padding: 0 .375em;

            &:nth-child(odd) {
                background-color: color('border', 'light');
            }

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
</style>
