<template>
    <div id="app" class="Display">
        <toolbar></toolbar>
        <router-view name="calendar"></router-view>
    </div>
</template>

<script>
    import moment from 'moment';
    import Toolbar from './components/Toolbar.vue';

    export default {
        name: 'VueCarBooking',

        components: {
            Toolbar,
        },

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
        flex-direction: column;

        margin: 0;
        padding: 0;
        list-style-type: none;

        width: 100vw;
        height: 100vh;
    }
</style>
