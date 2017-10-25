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

<style lang="scss">
    .a-button {
        font-family: Roboto, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;

        font-size: 1.4rem;
        font-weight: 500;
        letter-spacing: 0.04em;
        line-height: 3.6rem;

        text-decoration: none;
        text-transform: uppercase;

        display: inline-block;
        position: relative;

        box-sizing: border-box;

        min-width: 8.8rem;
        height: 3.6rem;
        padding: 0 1.6rem;

        border: none;
        outline: none;
        text-align: center;

        user-select: none;

        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;

        overflow: hidden;
        vertical-align: middle;

        border-radius: 2px;

        &:active {
            outline: none;
        }

        &:hover {
            cursor: pointer;
        }

        &::-moz-focus-inner {
            padding: 0;
            border: 0;
        }

        &:disabled {
            background-color: transparent;
            color: rgba(0, 0, 0, 0.38);
            cursor: default;
            pointer-events: none;
        }

        &:not(:disabled) {
            background-color: transparent;
            color: color(primary);

            will-change: transform, opacity;
            -webkit-tap-highlight-color: transparent;
        }

        &--active {
            &:after {
                display: block;
                content: '';

                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;

                border-top: 2px solid currentColor;
            }
        }
    }




    /*
        .mdc-button--raised:disabled,
        .mdc-button--unelevated:disabled {
            background-color: rgba(0, 0, 0, 0.12);
            color: rgba(0, 0, 0, 0.38);
            color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));
        }




        .mdc-button--theme-dark .mdc-button--raised:disabled,
        .mdc-theme--dark .mdc-button--raised:disabled, .mdc-button--theme-dark
        .mdc-button--unelevated:disabled,
        .mdc-theme--dark
        .mdc-button--unelevated:disabled {
            background-color: rgba(255, 255, 255, 0.12);
            color: rgba(0, 0, 0, 0.38);
            color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));
        }




        .mdc-button--raised:not(:disabled),
        .mdc-button--unelevated:not(:disabled) {
            background-color: #212121;
        }




        @supports not (-ms-ime-align: auto) {
            .mdc-button--raised:not(:disabled),
            .mdc-button--unelevated:not(:disabled) {
                background-color: var(--mdc-theme-primary, #212121);
            }
        }




        .mdc-button--raised:not(:disabled),
        .mdc-button--unelevated:not(:disabled) {
            color: white;
            color: var(--mdc-theme-text-primary-on-primary, white);
        }




        .mdc-button--raised:not(:disabled),
        .mdc-button--unelevated:not(:disabled) {
            --mdc-ripple-surface-width: 0;
            --mdc-ripple-surface-height: 0;
            --mdc-ripple-fg-size: 0;
            --mdc-ripple-left: 0;
            --mdc-ripple-top: 0;
            --mdc-ripple-fg-scale: 1;
            --mdc-ripple-fg-translate-end: 0;
            --mdc-ripple-fg-translate-start: 0;
            will-change: transform, opacity;
            -webkit-tap-highlight-color: transparent;
        }





        .mdc-button--raised:not(:disabled)::before,
        .mdc-button--unelevated:not(:disabled)::before {
            background-color: rgba(255, 255, 255, 0.32);
            position: absolute;
            top: calc(50% - 100%);
            left: calc(50% - 100%);
            width: 200%;
            height: 200%;
            -webkit-transition: opacity 250ms linear;
            transition: opacity 250ms linear;
            border-radius: 50%;
            opacity: 0;
            pointer-events: none;
            content: "";
        }




        @supports (background-color: color(green a(10%))) {
            .mdc-button--raised:not(:disabled)::before,
            .mdc-button--unelevated:not(:disabled)::before {
                background-color: color(var(--mdc-theme-text-primary-on-primary, white) a(32%));
            }
        }









        .mdc-button--raised:not(:disabled)::after,
        .mdc-button--unelevated:not(:disabled)::after {
            background-color: rgba(255, 255, 255, 0.32);
            position: absolute;
            top: calc(50% - 100%);
            left: calc(50% - 100%);
            width: 200%;
            height: 200%;
            -webkit-transition: opacity 250ms linear;
            transition: opacity 250ms linear;
            border-radius: 50%;
            opacity: 0;
            pointer-events: none;
            content: "";
        }




        @supports (background-color: color(green a(10%))) {
            .mdc-button--raised:not(:disabled)::after,
            .mdc-button--unelevated:not(:disabled)::after {
                background-color: color(var(--mdc-theme-text-primary-on-primary, white) a(32%));
            }
        }








        .mdc-button--raised {
            -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
            box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
            -webkit-transition: -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
            transition: -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
            transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
            transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
            will-change: box-shadow;
        }




        .mdc-button--raised:hover, .mdc-button--raised:focus {
            -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        }




        .mdc-button--raised:active {
            -webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
            box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
        }




        .mdc-button--raised:disabled {
            -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
            box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
        }




        .mdc-button--stroked {
            border-style: solid;
            border-width: 2px;
            line-height: 32px;
        }




        .mdc-button--stroked:disabled {
            border-color: rgba(0, 0, 0, 0.38);
            border-color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));
        }




        .mdc-button--theme-dark .mdc-button--stroked:disabled,
        .mdc-theme--dark .mdc-button--stroked:disabled {
            border-color: rgba(255, 255, 255, 0.5);
            border-color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));
        }




        .mdc-button--stroked.mdc-button--dense {
            line-height: 27px;
        }




        .mdc-button--stroked:not(:disabled) {
            border-color: #212121;
            border-color: var(--mdc-theme-primary, #212121);
        }




        .mdc-button--compact {
            padding: 0 8px;
        }




        .mdc-button--dense {
            height: 32px;
            font-size: .8125rem;
            line-height: 32px;
        }




        .mdc-button__icon {
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-right: 8px;
            font-size: 18px;
            line-height: inherit;
            vertical-align: top;
        }

        */
</style>
