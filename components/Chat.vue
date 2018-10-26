<template>
  <div class="chat">
    <div class="chat-messages">
      <div
        v-for="item in items"
        :key="item.id"
        class="chat-messages__item">
        <ChatMessage :message="item" />
      </div>
    </div>
    <div class="chat-actions">
      <input
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
      chatMessage: '',
      items: []
    }
  },
  mounted() {
    // console.log(this);
    // this.$store.dispatch('chat/SET_CONNECTED', true);
  },
  beforeMount() {
    socket.on('message', (message) => {
      console.log('message', message)
      this.items.push({
        id: Math.floor((Math.random() * 100000) + 1),
        type: 'in',
        message
      })
    })
  },
  methods: {
    sendMessage(message) {
      socket.emit('message', {
        message,
        user: 'guest0001'
        })
      this.items.push({
        id: Math.floor((Math.random() * 100000) + 1),
        type: 'out',
        message
      })
    }
  }
}
</script>

<style lang="scss">
.chat {
  &-messages {
    width: 200px;
    height: 400px;
    overflow-y: auto;
  }
}
</style>
