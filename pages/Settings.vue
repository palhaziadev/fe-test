<template>
  <section class="settings-page">
    <Settings />
  </section>
</template>

<script>
import Settings from '~/components/Settings.vue'

export default {
  components: {
    Settings
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/common.scss';

.settings-page {
  @extend %common-page-style;
  padding: 20px;
}
</style>