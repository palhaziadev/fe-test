<template>
  <div
    :style="{ height: pageHeight }"
    class="chat">
    <div
      ref="chat-messages"
      class="chat-messages">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="chat-messages__item">
        <ChatMessage :message="message" />
      </div>
    </div>
    <div class="chat-actions">
      <input
        ref="message-input"
        v-model="chatMessage"
        class="chat-actions__input"
        placeholder="Type a message"
        @keyup.enter="sendMessage(chatMessage)">
      <button
        class="chat-actions__button"
        @click="sendMessage(chatMessage)">
        Send
      </button>
    </div>
  </div>
</template>

<script>
import socket from '~/plugins/socket.io.js';
import ChatMessage from './ChatMessage.vue';
import { mapState } from 'vuex';

export default {
  components: {
    ChatMessage
  },
  data() {
    return {
      pageHeight: '',
      chatMessage: ''
    }
  },
  computed: {
    ...mapState('chat', {
      username: (state) => state.username,
      messages: (state) => state.messages
    }),
  },
  mounted() {
    // wait to next tick to add event listener
    this.$nextTick(function () {
      window.addEventListener('resize', this.handleResize);
    });
    this.handleResize();
    this.$refs['message-input'].focus();
  },
  created() {
    socket.on('message', (message) => {
      this.$store.dispatch('chat/ADD_MESSAGE', {
        type: 'in',
        message
      });
      this.$nextTick(() => {
        this.scrollToBottom('chat-messages');
      });
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
      if (element) {
        element.scrollTop = (element || {}).scrollHeight;
      }
    },
    sendMessage(message) {
      if (message.trim() !== '') {
        socket.emit('message', {
          message,
          user: this.username
          })
        this.$store.dispatch('chat/ADD_MESSAGE', {
          type: 'out',
          message: {
            message,
            user: this.username
          }
        });
        this.scrollToBottom('chat-messages')
        this.chatMessage = ''
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
    min-height: 2em;
    margin: 10px 10px 20px 10px;
    &__input {
      flex: 4;
      padding-left: 10px;
      border: none;
      background-color: $lightGrey;
      border-radius: 4px 0 0 4px;
    }
    &__button {
      flex: 1;
      background-color: $lightGrey;
      border-radius: 0 4px 4px 0;
      padding: 0;
      margin: 0;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
