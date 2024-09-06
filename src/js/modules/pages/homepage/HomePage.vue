<template>
    <HomePageStandard class="hidden platform-viewport-breakpoint:block" />
    <HomePageMobile class="block platform-viewport-breakpoint:hidden" />
</template>

<script>


import HomePageStandard from './views/HomePageStandard.vue'
import HomePageMobile   from './views/HomePageMobile.vue'

export default {
  name: 'HomePage',
  components: {
    HomePageStandard,
    HomePageMobile
  },
}
</script>