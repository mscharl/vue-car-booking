<template>
    <header class="Toolbar">
        <div class="Toolbar__row">
            <h1 class="Toolbar__title">
                <router-link to="/">Booking Prototype</router-link>
            </h1>
            <div class="Toolbar__nav">
                <calendar-style></calendar-style>
            </div>
        </div>
        <div class="Toolbar__row Toolbar__row--subbar">
            <current-date-range class="Toolbar__subtitle"></current-date-range>
            <div class="Toolbar__nav">
                <calendar-nav></calendar-nav>
            </div>
        </div>
    </header>
</template>

<script>
    import CalendarNav from './CalendarNav.vue';
    import CalendarStyle from './CalendarStyle.vue';
    import CurrentDateRange from './CurrentDateRange.vue';

    export default {
        name: 'Toolbar',

        components: {
            CalendarNav,
            CalendarStyle,
            CurrentDateRange,
        },
    }
</script>
