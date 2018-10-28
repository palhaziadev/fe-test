export const state = () => ({
  hasUnviewedMessage: false,
  username: 'guest0001',
  messages: []
});

export const actions = {
  SET_USERNAME({ commit }, username) {
    commit('SET_USERNAME', username);
  },
  UNVIEWED_MESSAGE({ commit }, hasUnviewedMessage) {
    commit('UNVIEWED_MESSAGE', hasUnviewedMessage);
  },
  ADD_MESSAGE({ commit }, message) {
    commit('ADD_MESSAGE', message);
  }
};
export const mutations = {
  SET_USERNAME(state, username) {
    state.username = username;
  },
  UNVIEWED_MESSAGE(state, hasUnviewedMessage) {
    state.hasUnviewedMessage = hasUnviewedMessage;
  },
  ADD_MESSAGE(state, message) {
    state.messages = [...state.messages, message];
  }
};