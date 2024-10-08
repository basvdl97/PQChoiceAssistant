<template>
    <NavStandard class="hidden platform-viewport-breakpoint:block" 
        :selected_menu_item="selected_menu_item"
        :menu_items="menu_items"
    />
    <NavMobile class="block platform-viewport-breakpoint:hidden" 
        :selected_menu_item="selected_menu_item"
        :menu_items="menu_items"
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
                        label: 'KEM choice assistant',
                        route_name: 'KEMPageRoute',
                    },
                    {
                        value: this.$router.resolve({name: 'DSSPageRoute'}).href.split('/').pop(),
                        label: 'DSS choice assistant',
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
                        value: 'x',
                        label: 'Git repo',
                        route_name: 'GitHubPageRoute'
                    }
                ]
            }
        },
        watch: {
            $route(to, from) {
                this.selected_menu_item = to.path.slice(1);
            }
        }
    }
</script>