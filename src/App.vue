<template>
  <Nav />
  <router-view />
</template>

<script >
import { RouterView } from 'vue-router'
import Nav from '@/js/modules/generic/nav/Nav.vue'


export default {
  name: 'App',
  components: {
    RouterView,
    Nav
  }
}
</script>