<script>
    import AButton from './AButton.vue';

    export default {
        name      : 'APrimaryButton',
        functional: true,

        props: {
            tag   : {
                type    : String,
                required: false,
                default : 'button',
            },
            to    : {
                type    : [String, Object],
                required: false,
            },
            active: {
                type    : Boolean,
                required: false,
                default : false,
            },
        },

        render(createElement, context) {
            context.data.class = {
                ...context.data.class,
                'a-button--primary': true,
            };

            return createElement(AButton, context.data, context.children);
        },
    }
</script>
