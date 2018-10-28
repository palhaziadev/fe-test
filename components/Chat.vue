<template>
  <div
    :style="{ height: pageHeight }"
    class="chat">
    <div
      ref="chat-messages"
      class="chat-messages">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="chat-messages__item">
        <ChatMessage :message="item" />
      </div>
    </div>
    <div class="chat-actions">
      <input
        ref="message-input"
        v-model="chatMessage"
        class="chat-actions__input"
        @keyup.enter="sendMessage(chatMessage)">
      <button
        class="chat-actions__button"
        @click="sendMessage()">
        Send
      </button>
    </div>
  </div>
</template>

<script>
import socket from '~/plugins/socket.io.js'
import ChatMessage from './ChatMessage.vue'

export default {
  components: {
    ChatMessage
  },
  data() {
    return {
      pageHeight: '',
      chatMessage: '',
      items: []
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.$store.dispatch('chat/SET_CONNECTED', true);
    this.$refs['message-input'].focus();
  },
  created() {
    socket.on('message', (message) => {
      console.log('message', message)
      this.items.push({
        type: 'in',
        message
      })
      this.$nextTick(() => {
        this.scrollToBottom('chat-messages')
      })
      // chat page is not active
      if (this.$route.name !== 'Chat') {
        // set unviewed message flag to true, so I can trigger notification in header
        this.$store.dispatch('chat/UNVIEWED_MESSAGE', true);
      } else {
        this.$store.dispatch('chat/UNVIEWED_MESSAGE', false);
      }
    })
  },
  beforeDestroy: function () {
    // remove eventhandler
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.pageHeight = `${document.documentElement.clientHeight - 54}px`;
    },
    scrollToBottom(elementToScroll) {
      const element = this.$refs[elementToScroll];
      element.scrollTop = element.scrollHeight;
    },
    sendMessage(message) {
      if (message.trim() !== '') {
        socket.emit('message', {
          message,
          user: 'guest0001'
          })
        this.items.push({
          type: 'out',
          message: {
            message,
            user: 'guest0001'
          }
        })
        this.scrollToBottom('chat-messages')
        this.chatMessage = ''
      } else {
        // error handling
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';

.chat {
  display: flex;
  flex-direction: column;
  &-messages {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  &-actions {
    display: flex;
    height: 2em;
    &__input {
      flex: 4;
      padding-left: 4px;
    }
    &__button {
      flex: 1;
    }
  }
}
</style>
