<template>
    <div id="app">
        <div class="App">
            <toolbar></toolbar>

            <main class="App__main">
                <router-view name="calendar"></router-view>
            </main>
        </div>


        <section class="App__popups">
            <booking-popup></booking-popup>
        </section>
    </div>
</template>

<script>
    import moment from 'moment';
    import Toolbar from './components/Toolbar.vue';
    import BookingPopup from './components/popups/BookingPopup.vue';

    export default {
        name: 'VueCarBooking',

        components: {
            BookingPopup,
            Toolbar,
        },

        data() {
            return {}
        },

        computed: {},
    }
</script>
