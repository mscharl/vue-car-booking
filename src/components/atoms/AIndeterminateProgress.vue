<script>
    export default {
        name: 'AIndeterminateProgress',

        functional: true,

        render(createElement, context) {
            return createElement('div', {
                'class': [
                    context.data.class, context.data.staticClass, 'a-indeterminate-progress',
                ],
            });
        },
    }
</script>