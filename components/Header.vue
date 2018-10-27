<template>
  <section class="header">
    <ul class="header-list">
      <li class="header-list__item">
        <nuxt-link
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

export default {
  components: {
    ChatIcon,
    ApertureIcon,
    SettingsIcon
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
    margin: 2px 2px 0 0;
    margin-bottom: -1px;
    &:first-of-type {
      margin-left: 2px;
    }
  }
  &__item-link {
    background-color: $backgroundColor;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border: 1px solid $borderColor;

    color: $linkColor;
    text-decoration: none;
    &:visited {
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
      color: $linkActiveColor;
    }
  }
}
.nuxt-link-active {
  color: $linkActiveColor;
  border-bottom: 1px solid $backgroundColor;
  background-color: $backgroundColor;
}
</style>
