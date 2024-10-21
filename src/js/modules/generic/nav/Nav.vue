<template>
    <NavStandard class="hidden platform-viewport-breakpoint:block" 
        :selected_menu_item="selected_menu_item"
        :menu_items="menu_items"

        @handle-click-nav-item="handleClickNavItem"
    />
    <NavMobile class="block platform-viewport-breakpoint:hidden" 
        :selected_menu_item="selected_menu_item"
        :menu_items="menu_items"

        @handle-click-nav-item="handleClickNavItem"
    />
</template>

<script>
    import NavStandard from './NavStandard.vue';
    import NavMobile from './NavMobile.vue';
    
    export default {
        name: 'Nav',
        components: {
            NavStandard,
            NavMobile
        },
        data(){
            return {
                selected_menu_item: 'home',
                menu_items: [
                    {
                        value: this.$router.resolve({name: 'HomePageRoute'}).href.split('/').pop(),
                        label: 'Home',
                        route_name: 'HomePageRoute'
                    },
                    {
                        value: this.$router.resolve({name: 'KEMPageRoute'}).href.split('/').pop(),
                        label: 'EncChoiceAssistant',
                        route_name: 'KEMPageRoute',
                    },
                    {
                        value: this.$router.resolve({name: 'DSSPageRoute'}).href.split('/').pop(),
                        label: 'DSAChoiceAssistant',
                        route_name: 'DSSPageRoute'
                    },
                    {
                        value: this.$router.resolve({name: 'AlgorithmOverviewPageRoute'}).href.split('/').pop(),
                        label: 'Overview of PQC algorithms',
                        route_name: 'AlgorithmOverviewPageRoute'
                    },
                    {
                        value: this.$router.resolve({name: 'AboutPageRoute'}).href.split('/').pop(),
                        label: 'About',
                        route_name: 'AboutPageRoute'
                    },
                    {
                        value: 'ext:github',
                        label: 'Git repo',
                        action: () => window.open('https://github.com/basvdl97/PQChoiceAssistant/tree/main', '_blank')
                    }
                ]
            }
        },
        methods:{
            handleClickNavItem(menu_item){
                if(menu_item.value.startsWith('ext:')){
                    menu_item.action();
                } else {
                    this.$router.push({name: menu_item.route_name});
                }
            }
        },
        watch: {
            $route(to, from) {
                this.selected_menu_item = to.path.split('/').pop();
            }
        }
    }
</script>