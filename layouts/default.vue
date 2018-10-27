<template>
  <div>
    <Header />
    <nuxt keep-alive />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';

export default {
  components: {
    Header
  }
}
</script>

<style>
</style>
