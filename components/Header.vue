<template>
  <section class="header">
    <ul class="header-list">
      <li class="header-list__item">
        <nuxt-link
          :class="{'header-list__item-link--notification': hasUnviewedMessage}"
          to="/chat"
          class="header-list__item-link">
          <span>
            <ChatIcon />
          </span>
          <span>
            Chat
          </span>
        </nuxt-link>
      </li>
      <li class="header-list__item">
        <nuxt-link
          to="/photos"
          class="header-list__item-link">
          <span>
            <ApertureIcon />
          </span>
          <span>
            Photos
          </span>
        </nuxt-link>
      </li>
      <li class="header-list__item">
        <nuxt-link
          to="/settings"
          class="header-list__item-link">
          <span>
            <SettingsIcon />
          </span>
          <span>
            Settings
          </span>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import ChatIcon from '~/assets/icons/message-square.svg';
import ApertureIcon from '~/assets/icons/aperture.svg';
import SettingsIcon from '~/assets/icons/settings.svg';
import { mapGetters } from 'vuex';

export default {
  components: {
    ChatIcon,
    ApertureIcon,
    SettingsIcon
  },
  computed: {
    ...mapGetters('chat', [
      'hasUnviewedMessage',
    ])
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';

.header-list {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
  &__item {
    flex: 1;
    margin: 4px 4px 0 0;
    margin-bottom: -1px;
    &:first-of-type {
      margin-left: 4px;
    }
    &:last-of-type {
      margin-left: 0;
    }
  }
  &__item-link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border: 1px solid $lightGrey;
    border-bottom: none;
    color: $linkColor;
    text-decoration: none;
    &:visited {
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
      color: $linkActiveColor;
    }
    &--notification {
      animation: backgroundColorChange 2s linear infinite;
    }
  }
}
.nuxt-link-active {
  color: $linkActiveColor;
  border-bottom: 1px solid $backgroundColor;
  background-color: $backgroundColor;
}
@keyframes backgroundColorChange {
  50% {
    background-color: $errorColor;
  }
}
</style>
