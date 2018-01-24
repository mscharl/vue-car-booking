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
