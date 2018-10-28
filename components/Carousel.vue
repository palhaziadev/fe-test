<template>
  <div
    :style="getCarouselStyle"
    class="carousel">
    <div
      :style="getCarouselStyle"
      class="carousel__images">
      <transition-group
        name="carousel-list">
        <div
          v-for="(image, index) in images"
          v-show="index === active"
          :key="index"
          :style="getCarouselStyle"
          :class="{ 'right': (right && (index === active)) || (right && (index === active - 1))}"
          class="carousel-list-item">
          <CarouselImage
            :width="getCarouselSize.carouselWidth"
            :height="getCarouselSize.carouselHeight"/>
        </div>
      </transition-group>
    </div>
    <div class="carousel-actions">
      <div
        class="carousel-actions__button"
        @click="slideLeft()">
        <ChevronLeft />
      </div>
      <div class="carousel-actions__state">
        {{ images.length }}/{{ active + 1 }}
      </div>
      <div
        class="carousel-actions__button"
        @click="slideRight()">
        <ChevronRight />
      </div>
    </div>
  </div>
</template>

<script>
import ChevronLeft from '~/assets/icons/chevron-left.svg';
import ChevronRight from '~/assets/icons/chevron-right.svg';
import CarouselImage from '~/components/CarouselImage.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ChevronLeft,
    ChevronRight,
    CarouselImage
  },
  data() {
    return {
      active: 0,
      right: false,
      // push initial image into carousel
      images: [0]
    }
  },
  computed: {
    ...mapGetters('carousel', [
      'getCarouselSize',
    ]),
    getCarouselStyle(getters) {
      return {
        width: `${this.getCarouselSize.carouselWidth}px`,
        height: `${this.getCarouselSize.carouselHeight}px`,
      };
    }
  },
  methods: {
    slideLeft() {
      this.right = false;
      // prevent slide left if the first picture is shown
      this.active = Math.max(this.active - 1, 0);
    },
    slideRight() {
      this.active = this.active + 1;
      // add class right if slide right clicked to change transition classes
      this.right = true;
      // add new image only if I am on the last slide of the carousel
      if (this.images.length === this.active) {
        this.images.push(this.images.length);
      }
    }
  }
}
</script>

<style lang="scss">
.carousel__images {
  position: relative;
  height: auto;
  width: auto;
  overflow: hidden;
  .carousel-list-item {
    position: absolute;
    left: 0px;
  }
  .right.carousel-list-enter-active, .right.carousel-list-leave-active {
    transition: all 2s;
  }
  .right.carousel-list-enter {
    transform: translateX(100%)
  }

  .right.carousel-list-leave-to {
    transform: translateX(-100%)
  }

  .carousel-list-enter-active, .carousel-list-leave-active {
    transition: all 2s;
  }
  .carousel-list-enter {
    transform: translateX(-100%)
  }

  .carousel-list-leave-to {
    transform: translateX(100%)
  }
}
.carousel-actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  &__button {
    height: 40px;
    width: 40px;
  }
}
</style>