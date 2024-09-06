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
                        value: this.$router.resolve({name: 'HomePageRoute'}).href.slice(1),
                        label: 'Home',
                        route_name: 'HomePageRoute'
                    },
                    {
                        value: this.$router.resolve({name: 'KEMPageRoute'}).href.slice(1),
                        label: 'KEM choice assistant',
                        route_name: 'KEMPageRoute',
                    },
                    {
                        value: this.$router.resolve({name: 'DSSPageRoute'}).href.slice(1),
                        label: 'DSS choice assistant',
                        route_name: 'DSSPageRoute'
                    },
                    {
                        value: this.$router.resolve({name: 'AlgorithmOverviewPageRoute'}).href.slice(1),
                        label: 'Overview of PQC algorithms',
                        route_name: 'AlgorithmOverviewPageRoute'
                    },
                    {
                        value: this.$router.resolve({name: 'AboutPageRoute'}).href.slice(1),
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