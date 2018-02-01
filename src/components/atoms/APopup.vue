<template>
    <transition name="a-popup" appear>
        <div class="a-popup__container">
            <aside class="a-popup__backdrop"></aside>
            <div class="a-popup__wrapper">
                <div class="a-popup" :class="dynamicClass()">
                    <header class="a-popup__header" :class="dynamicClass('header')">
                        <h1 class="a-popup__title" v-if="title">{{ title }}</h1>
                        <a-icon-button tag="i" icon="close" class="a-popup__close" @click="close"></a-icon-button>
                    </header>
                    <section class="a-popup__content" :class="dynamicClass('content')">
                        <slot></slot>
                    </section>
                    <footer class="a-popup__footer" :class="dynamicClass('footer')">
                        <slot name="footer"></slot>
                    </footer>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import AIconButton from './AIconButton.vue';
    import * as KeyCode from '../../constants/KeyCode';

    export default {
        name      : 'APopup',
        components: {
            AIconButton,
        },

        props: {
            title: {
                type    : String,
                required: false,
            },

            'popup-class': {
                type    : String,
                required: false,
            },
        },

        data() {
            return {
                keyupListener: null,
                hide         : false,
            }
        },

        /**
         * Start up the component
         */
        mounted() {
            //
            this.keyupListener = (event) => this.onKeyup(event);
            document.addEventListener('keyup', this.keyupListener);
        },

        /**
         * Handle things before component gets destroyed
         */
        beforeDestroy() {
            // Remove event listener to prevent unused listeners
            document.removeEventListener('keyup', this.keyupListener);
        },

        methods: {
            /**
             * Emits the close event
             * */
            close() {
                this.$emit('close')
            },

            /**
             * Event handler for a key-up-event
             * @param event
             */
            onKeyup(event) {
                // call close method if ESC key is pressed
                if(event.keyCode === KeyCode.ESC) {
                    this.close();
                }
            },

            dynamicClass(appendix) {
                if(!this.popupClass) {
                    return
                }

                if(!appendix) {
                    return this.popupClass
                }

                return `${this.popupClass}__${appendix}`;
            },
        },
    }
</script>