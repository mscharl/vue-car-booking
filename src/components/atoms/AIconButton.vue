<script>
    export default {
        name      : 'AIconButton',
        functional: true,

        props: {
            tag : {
                type    : String,
                required: false,
                default : 'button',
            },
            to  : {
                type    : [String, Object],
                required: false,
            },
            icon: {
                type    : String,
                required: true,
            },
        },

        render(createElement, context) {
            const classes = {
                ...context.data.class,
                'a-icon-button' : true,
                'material-icons': true,
            };

            return context.props.to ? createElement('router-link', {
                'class': classes,
                props  : {
                    tag: context.props.tag,
                    to : context.props.to,
                },
            }, [context.props.icon]) : createElement(context.props.tag, {
                'class': classes,
                on     : {
                    click: context.listeners.click,
                },
            }, [context.props.icon]);
        },
    }
</script>
