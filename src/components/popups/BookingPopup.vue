<template>
    <a-popup popup-class="BookingPopup" :title="popupTitle" @close="dismissPopup" v-if="showPopup">
        <fieldset class="BookingPopup__fieldset BookingPopup__fieldset--time">
            <legend class="BookingPopup__fieldset__legend">
                Buchungszeitraum
            </legend>
            <flatpickr v-model="datetime" :config="startDateConfig" @change="updateStartDate"></flatpickr>
            <flatpickr v-model="datetimeEnd" :config="endDateConfig"></flatpickr>
        </fieldset>

        <template slot="footer">
            <div>
                Test
            </div>
            <button>Test</button>
        </template>
    </a-popup>
</template>

<script>
    import APopup from '../atoms/APopup.vue';
    import Flatpickr from 'vue-flatpickr-component';
    import { German } from 'flatpickr/dist/l10n/de';

    export default {
        name      : 'BookingPopup',
        components: {
            APopup,
            Flatpickr,
        },

        data() {
            const now     = new Date();
            const minutes = Math.ceil((now.getMinutes() + 1) / 15) * 15;
            const then    = (new Date()).setHours(now.getHours() + 1, minutes, 0);
            now.setMinutes(minutes, 0)

            return {
                showPopup  : true,
                datetime   : now,
                datetimeEnd: null,

                datetimeBaseConfig: {
                    enableTime     : true,
                    time_24hr      : true,
                    minuteIncrement: 15,
                    locale         : German,
                },
            }
        },

        watch: {
            datetime(value) {
                const now        = new Date(value);
                this.datetimeEnd = (new Date(now)).setHours(now.getHours() + 1);
                console.log(new Date(this.datetimeEnd));
            },
        },

        computed: {
            popupTitle() {
                return 'Neue Buchung'
            },

            minStartDate() {
                return new Date();
            },

            minEndDate() {
                return this.datetime;
            },

            startDateConfig() {
                return {
                    ...this.datetimeBaseConfig,
                    minDate: this.minStartDate,
                }
            },

            endDateConfig() {
                return {
                    ...this.datetimeBaseConfig,
                    minDate: this.minEndDate,
                }
            },
        },

        methods: {
            dismissPopup() {
                this.showPopup = false
            },

            updateStartDate(event) {
                console.log(event);
            },
        },
    }
</script>