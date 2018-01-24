<script>
    export default {
        name      : 'AButton',
        functional: true,

        props: {
            tag   : {
                type    : String,
                required: true,
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
            const classes = {
                'a-button'        : true,
                'a-button--active': context.props.active,
            };

            return context.props.to ? createElement('router-link', {
                'class': classes,
                props  : {
                    tag: context.props.tag,
                    to : context.props.to,
                },
            }, context.children) : createElement(context.props.tag, {
                'class': classes,
            }, context.children);
        },
    }
</script>
