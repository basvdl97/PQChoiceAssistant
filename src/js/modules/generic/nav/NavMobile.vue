<template>
    <div class="relative w-full">
        <!-- nav bar -->
        <div class="w-full bg-primary px-2 flex h-12 items-center">
            <!-- Logo img @/assets/nav-icon.png -->
            <div class="w-10 min-w-10 min-h-10 h-10 mx-2 ">
                <img src="@/assets/nav-icon.png" alt="Logo" />
            </div>

            <!-- title -->
            <div class=" w-fit">
                <button @click="$router.push({ name: 'HomePageRoute' })" class="ml-2 text-white text-xl font-semibold">
                    PQChoiceAssistant
                </button>
            </div>

            <!-- hamburger -->
            <div ref="myElement2" @click="is_menu_open = !is_menu_open"
                class="ml-auto flex justify-end text-white cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </div>
        </div>

        <!-- sliding menu -->
        <div ref="myElement"
            class="fixed z-10 bg-blue-50 w-5/6 max-w-[300px] h-[calc(100vh_-_3rem)] right-0 top-12 transition-transform duration-500 ease-in-out"
            :class="{
                'translate-x-[100%]': !is_menu_open,
                'translate-x-[0%]': is_menu_open
            }">
            <div v-for="menu_item in menu_items" :key="menu_item.value">
                <button @click="handleClickNavItem(menu_item)"
                    class="w-full px-4 py-4 flex transition-colors duration-100 ease-in-out" :class="{
                        'bg-primary text-white': selected_menu_item == menu_item.value,
                        'hover:bg-gray-300 hover:text-primary': selected_menu_item !== menu_item.value
                    }">
                    {{ menu_item.label }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menu_items: {
            type: Array,
            required: true,
        },
        selected_menu_item: {
            type: String,
            required: true,
        },
    },
    emits: ['handle-click-nav-item'],
    data() {
        return {
            is_menu_open: false
        }
    },
    mounted() {
        document.addEventListener("click", this.handleClickOutside);
        // this.toggleFullscreen();
    },
    beforeDestroy() {
        document.removeEventListener("click", this.handleClickOutside);
    },
    methods: {

        toggleFullscreen() {
            const elem = document.documentElement; // The whole page

            if (!document.fullscreenElement) {
                // Request fullscreen
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) { // Firefox
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) { // IE/Edge
                    elem.msRequestFullscreen();
                }
            } else {
                // Exit fullscreen
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) { // Firefox
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { // IE/Edge
                    document.msExitFullscreen();
                }
            }
        },
        handleClickNavItem(menu_item) {
            this.$emit('handle-click-nav-item', menu_item);
            this.is_menu_open = false;
        },
        handleClickOutside(event) {
            if (this.$refs.myElement2.contains(event.target)) { return; };

            const element = this.$refs.myElement;
            if (element && !element.contains(event.target)) {
                this.is_menu_open = false;
            }
        }
    }
}
</script>
