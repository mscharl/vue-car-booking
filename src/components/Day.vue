<script>
    import moment from 'moment';
    import Days from './Days.vue';

    export default {
        name      : 'Day', // functional: true, /* I Would love to use functional but that would break the transition */
        components: {
            Days,
        },

        props: {
            firstDay: {
                type    : moment,
                required: true,
            },
        },

        render(createElement/*, context*/) {
            return createElement('Days', {
                props: {
                    // firstDay: context.props.firstDay,
                    firstDay: this.firstDay,
                    display : 'single',
                },
            });
        },
    }
</script>
