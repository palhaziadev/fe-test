<template>
  <section class="photos-page">
    <Carousel />
  </section>
</template>

<script>
import Carousel from '~/components/Carousel.vue'

export default {
  components: {
    Carousel
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/common.scss';

.photos-page {
  @extend %common-page-style;
}
</style>
