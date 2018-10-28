<template>
  <div
    :class="[message.type === 'in' ? 'chat-message--in' : 'chat-message--out']"
    class="chat-message">
    <div
      :class="[message.type === 'in' ? 'chat-message__item--in' : 'chat-message__item--out']"
      class="chat-message__item">
      <span
        v-if="message.type === 'in'"
        class="chat-message__item-user">
        {{ message.message.user }}:
      </span>
      <span>
        {{ message.message.message }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';

.chat-message {
  display: flex;
  word-break: break-all;
  margin: 10px 5px;
  &--in {
    justify-content: flex-start;
  }
  &--out {
    justify-content: flex-end;
  }
  &__item {
    max-width: 80%;
    padding: 5px;
    border-radius: $borderRadius;
    &--in {
      background-color: $messageBlue;
    }
    &--out {
      background-color: $messageGreen;
      color: $backgroundColor;
    }
  }
  &__item-user {
    font-weight: bold;
  }
}
</style>
