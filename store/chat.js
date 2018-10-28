export const state = () => ({
  hasUnviewedMessage: false,
  username: 'guest0001'
});

export const actions = {
  SET_USERNAME({ commit }, username) {
    commit('SET_USERNAME', username);
  },
  UNVIEWED_MESSAGE({ commit }, hasUnviewedMessage) {
    commit('UNVIEWED_MESSAGE', hasUnviewedMessage);
  }
};
export const mutations = {
  SET_USERNAME(state, username) {
    state.username = username;
  },
  UNVIEWED_MESSAGE(state, hasUnviewedMessage) {
    state.hasUnviewedMessage = hasUnviewedMessage;
  }
};