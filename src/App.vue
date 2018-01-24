<template>
    <div id="app" class="App">
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
