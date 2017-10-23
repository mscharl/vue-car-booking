<script>
    export default {
        name      : 'AIconButton',
        functional: true,

        props: {
            tag : {
                type    : String,
                required: true,
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
            const classes = [
                'a-icon-button', 'material-icons',
            ];

            return context.props.to ? createElement('router-link', {
                'class': classes,
                props  : {
                    tag: context.props.tag,
                    to : context.props.to,
                },
            }, [context.props.icon]) : createElement(context.props.tag, {
                'class': classes,
            }, [context.props.icon]);
        },
    }
</script>

<style lang="scss">
    .a-icon-button {
        color: inherit;

        -webkit-tap-highlight-color: transparent;

        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;

        width: 4.8rem;
        height: 4.8rem;

        padding: 1.2rem;

        outline: none;
        font-size: 2.4rem;

        cursor: pointer;

        user-select: none;
    }
</style>
