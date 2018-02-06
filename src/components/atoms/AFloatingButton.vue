<script>
    import AIconButton from './AIconButton.vue';

    export default {
        name: 'AFloatingButton',

        functional: true,

        props: {
            icon: {
                type    : String,
                required: true,
            },
        },

        render(createElement, context) {
            const data = {
                ...context.data,
                'class': {
                    ...context.data.class,
                    'a-icon-button--floating': true,
                },
                props  : context.props,
            };

            return createElement(AIconButton, data, context.children);
        },
    }
</script>