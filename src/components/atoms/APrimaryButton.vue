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
            const data = {
                ...context.data,
                'class': [
                    context.data.class, context.data.staticClass, 'a-button--primary',
                ],
                props  : context.props,
            };

            return createElement(AButton, data, context.children);
        },
    }
</script>
