<template>
  <section class="settings-block">
    <div
      class="settings-block__header"
      @click="toggleBlock">
      <SettingsIcon
        :class="{ 'settings-block__header-icon--open': open }"
        class="settings-block__header-icon" />
      <slot name="header" />
    </div>
    <div
      :class="{ 'settings-block__content--open': open }"
      class="settings-block__content">
      <slot name="content" />
    </div>
  </section>
</template>

<script>
import SettingsIcon from '~/assets/icons/settings.svg';

export default {
  components: {
    SettingsIcon
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleBlock() {
      this.open = !this.open;
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';

.settings-block {
  &__header {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 3em;
    font-weight: bold;
  }
  &__header-icon {
    margin-right: 10px;
    transition: transform .5s ease-in-out;
    &--open {
      transform:rotate(180deg);
    }
  }
  &__content {
    padding: 0 5px;
    margin-left: 12px;
    overflow: hidden;
    max-height: 0;
    transition: 0.5s ease-in-out;
    border-left: 1px solid $linkActiveColor;
    &--open {
      max-height: 500px;
    }
  }
}
</style>
