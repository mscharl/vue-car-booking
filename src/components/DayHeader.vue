<template>
    <div class="Day-header">
        <div class="Day-header__name">
            {{ day.format('dddd') }}
        </div>
        <div class="Day-header__date" :class="{'Day-header__date--today': today}">
            {{ day.format('D') }}
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'DayHeader',

        props: {
            day: {
                type    : moment,
                required: true,
            },
        },

        computed: {
            today() {
                return this.day.isSame(moment(), 'day');
            },
        },
    }
</script>
