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

<style lang="scss">
    @import "../scss/variables";




    .Toolbar {
        background-color: color(primary);
        color: text-color(primary);

        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;

        flex: 0 0 auto;

        width: 100%;

        margin-bottom: .6rem;

        &__row {
            position: relative;

            display: flex;
            align-items: center;

            width: 100%;
            height: auto;

            min-height: 6.4rem;

            &--subbar {
                margin-top: -1.4rem;
                min-height: 0;
            }
        }

        &__title {
            font-size: 2rem;
            font-weight: 500;

            letter-spacing: 0.02em;

            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

            margin: 0 0 0 2.4rem;

            align-self: center;
            padding: 16px 0;
            line-height: 2.4rem;

            a {
                color: inherit;
                text-decoration: inherit;
            }
        }

        &__subtitle {
            font-size: 1.4rem;
            font-weight: 500;

            letter-spacing: 0.02em;

            white-space: nowrap;
            text-overflow: ellipsis;
            text-transform: uppercase;
            overflow: hidden;

            margin: 0 0 0 2.4rem;

            align-self: center;
        }

        &__nav {
            display: flex;
            flex-direction: row;
            align-items: center;

            margin-left: auto;
        }
    }
</style>
