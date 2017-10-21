<template>
    <div id="app" class="Display">
        <router-view name="calendar"></router-view>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'VueCarBooking',

        data() {
            return {}
        },

        computed: {},
    }
</script>

<style lang="scss">
    @import './scss/variables';
    @import './scss/transitions';

    // Map every variable into a css variable
    :root {
        @each $map_name, $map in $variables {
            @each $key, $value in $map {
                --#{$map_name}-#{$key}: $value;
            }
        }
    }



    .Display {
        display: flex;

        margin: 0;
        padding: 0;
        list-style-type: none;

        width: 100vw;
        height: 100vh;
    }
</style>
