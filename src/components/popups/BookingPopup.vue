<template>
    <a-popup popup-class="BookingPopup" :title="popupTitle" @close="dismissPopup" v-if="showPopup">
        <fieldset class="BookingPopup__fieldset BookingPopup__fieldset--time">
            <legend class="BookingPopup__fieldset__legend">
                Buchungszeitraum
            </legend>
            <div class="a-form__input-row">
                <flatpickr class="a-form__input" v-model="booking.starts_at" :config="startDateConfig"></flatpickr>
                <flatpickr class="a-form__input" v-model="booking.ends_at" :config="endDateConfig"></flatpickr>
            </div>
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
    import Flatpickr from '../_elements/Flatpickr.vue';
    import * as BookingModelFactory from '../../factories/BookingModelFactory';

    export default {
        name      : 'BookingPopup',
        components: {
            APopup,
            Flatpickr,
        },

        data() {
            return {
                showPopup : true,
                now       : new Date(),
                nowTimeout: null,

                booking: BookingModelFactory.createFromNothing(),
            }
        },

        mounted() {
            const setNow = () => {
                const now              = new Date();
                const currentSeconds   = now.getSeconds();
                const timeUntilNextSet = Math.max(1, (60 - currentSeconds)) * 1000;

                this.now        = now;
                this.nowTimeout = setTimeout(setNow, timeUntilNextSet);
            };

            setNow();
        },

        beforeDestroy() {
            clearTimeout(this.nowTimeout);
        },

        computed: {
            popupTitle() {
                // Prepared for editing an existing booking
                return 'Neue Buchung'
            },

            minStartDate() {
                return this.now;
            },

            startDateConfig() {
                return {
                    minDate: this.minStartDate,
                }
            },

            endDateConfig() {
                return {
                    minDate: this.booking.starts_at,
                }
            },
        },

        methods: {
            dismissPopup() {
                this.showPopup = false
            },
        },
    }
</script>