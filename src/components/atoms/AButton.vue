<script>
    export default {
        name      : 'AButton',
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
                    context.data.class, context.data.staticClass, 'a-button', { 'a-button--active': context.props.active },
                ],
                props  : context.props,
            };

            return context.props.to ? createElement('router-link', data, context.children) : createElement(context.props.tag, data, context.children);
        },
    }
</script>
