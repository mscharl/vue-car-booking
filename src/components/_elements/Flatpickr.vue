<template>
    <flatpickr-element v-model="valueProxy" :config="configObject"></flatpickr-element>
</template>

<script>
    import moment from 'moment';
    import FlatpickrElement from 'vue-flatpickr-component';
    import FLATPICKR_BASE_CONFIG from '../../constants/FlatpickrBaseConfig'


    export default {
        name: 'Flatpickr',

        // Define available component properties
        props: {
            value : Date,
            config: {
                type    : Object,
                required: false,
                default : {},
            },
        },

        // Components that are used in this component
        components: {
            FlatpickrElement,
        },

        // This object defines all computed properties of this component
        computed: {
            configObject() {
                return {
                    ...FLATPICKR_BASE_CONFIG, ...this.config
                }
            },

            valueProxy: {
                get() {
                    return moment(this.value).format('Y-MM-DD HH:mm:ss');
                },

                set(newValue) {
                    const value = moment(newValue).toDate();
                    this.$emit('input', value);
                },
            },
        },
    }
</script>