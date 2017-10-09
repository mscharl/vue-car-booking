<template>
    <ul class="Calendar-day">

    </ul>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'CalendarDay',

        props: {
            day: {
                type    : moment,
                required: true,
            },
        },
    }
</script>

<style scoped lang="scss">
    .Calendar-day {
        display: flex;
        flex-direction: column;
    }
</style>
