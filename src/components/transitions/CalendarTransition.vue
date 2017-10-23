<template>
    <transition :name="transitionName" mode="out-in" appear>
        <slot></slot>
    </transition>
</template>

<script>
    import { firstDayFromRoute } from '../../helper';

    export default {
        name: 'CalendarTransition',

        data() {
            return {
                transitionName: 'fade',
            };
        },

        watch: {
            ['$route'](to, from) {
                if(to.name !== from.name) {
                    this.transitionName = 'fade';
                }
                else {
                    const firstFrom = firstDayFromRoute(from);
                    const firstTo   = firstDayFromRoute(to);

                    this.transitionName = firstFrom < firstTo ? 'next-calendar' : 'prev-calendar';
                }
            },
        },
    }
</script>
