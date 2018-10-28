<template>
  <div class="carousel-image">
    <img
      :src="imageUrl">
  </div>
</template>

<script>

export default {
  props: {
    width: {
      type: Number,
      default: 640
    },
    height: {
      type: Number,
      default: 480
    },
  },
  data() {
    return {
      randomString: ''
    }
  },
  created() {
    this.imageUrl = `https://loremflickr.com/${this.width}/${this.height}?random=${this.generateRandomString()}`;
  },
  methods: {
    // add random string to url in order to prevent chaching
    generateRandomString() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
  }
}
</script>

<style lang="scss">
.carousel-image {
  width: inherit;
  height: inherit;
}
</style>