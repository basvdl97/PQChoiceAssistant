<template>
    <HomePageStandard class="hidden md:block" />
    <HomePageMobile class="block md:hidden" />
</template>

<script>
import HomePageStandard from './views/HomePageStandard.vue'
import HomePageMobile   from './views/HomePageMobile.vue'

export default {
  name: 'HomeView',
  components: {
    HomePageStandard,
    HomePageMobile
  },
}
</script>