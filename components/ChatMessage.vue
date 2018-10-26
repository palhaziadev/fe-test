<template>
  <div
    :class="[message.type === 'in' ? 'chat-message--in' : 'chat-message--out']"
    class="chat-message">
    {{ message.message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: null
    }
  },
}
</script>

<style lang="scss">
.chat-message {
  &--in {
  background-color: aqua;
  }
  &--out {
    background-color: blueviolet;
  }
}
</style>
