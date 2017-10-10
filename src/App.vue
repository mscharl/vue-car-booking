<template>
    <div id="app" class="Display">
        <week></week>
    </div>
</template>

<script>
    import moment from 'moment';
    import Week from './components/Week.vue';

    export default {
        name      : 'VueCarBooking',
        components: {
            Week,
        },
        data() {
            return {
            }
        },

        computed: {}
    }
</script>

<style lang="scss">
    @import '../scss/variables';




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
