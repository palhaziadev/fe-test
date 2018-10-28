<template>
  <section class="settings-section">
    <div class="settings">
      <SettingsBlock>
        <div
          slot="header"
          class="settings__header">
          <span>Photo Settings</span>
        </div>
        <div
          slot="content"
          class="settings__content">
          <div class="settings__content-line">
            <span class="settings__text">Width: {{ carouselWidthSetting }}</span>
            <input
              v-model="carouselWidthSetting"
              step="1"
              class="settings__input"
              type="range"
              min="320"
              max="1980"
              orient="vertical"
              @change="setCarouselWidthValue(carouselWidthSetting)" >
          </div>
          <div class="settings__content-line">
            <span class="settings__text">Height: {{ carouselHeightSetting }}</span>
            <input
              v-model="carouselHeightSetting"
              step="1"
              class="settings__input"
              type="range"
              min="200"
              max="1080"
              orient="vertical"
              @change="setCarouselHeightValue(carouselHeightSetting)" >
          </div>
        </div>
      </SettingsBlock>
    </div>
    <div class="settings">
      <SettingsBlock>
        <div
          slot="header"
          class="settings__header">
          <span>Chat Settings</span>
        </div>
        <div
          slot="content"
          class="settings__content">
          <div class="settings__content-line">
            <span class="settings__text">Username:</span>
            <input
              v-model="username"
              class="settings__input settings__input--text"
              placeholder="Enter username"
              type="text" >
          </div>
        </div>
      </SettingsBlock>
    </div>
  </section>
</template>

<script>
import SettingsBlock from '~/components/SettingsBlock.vue';
import { mapState } from 'vuex';

export default {
  components: {
    SettingsBlock
  },
  data() {
    return {
      carouselWidthSetting: 640,
      carouselHeightSetting: 480
    }
  },
  computed: {
    username: {
      get () {
        return this.$store.state.chat.username;
      },
      set (value) {
        this.$store.commit('chat/SET_USERNAME', value);
      }
    },
    ...mapState('carousel', {
      carouselWidth: (state) => state.carouselWidth,
      carouselHeight: (state) => state.carouselHeight,
    }),
  },
  methods: {
    setCarouselWidthValue(value) {
      this.$store.dispatch('carousel/SET_CAROUSEL_WIDTH', Number(value));
    },
    setCarouselHeightValue(value) {
      this.$store.dispatch('carousel/SET_CAROUSEL_HEIGHT', Number(value));
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';

.settings {
  margin-bottom: 20px;
  &__text {
    flex: 1;
  }
  &__input {
    flex: 4;
    margin: 10px 0;
    &--text {
      height: 2em;
      padding-left: 4px;
      border: 1px solid $lightGrey;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
  }
  &__content-line {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>
