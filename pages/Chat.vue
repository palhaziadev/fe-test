<template>
  <section class="chat-page">
    <Chat />
    Chat
  </section>
</template>

<script>
import Chat from '~/components/Chat.vue';

export default {
  components: {
    Chat
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/common.scss';

.chat-page {
  @extend %common-page-style;
}
</style>