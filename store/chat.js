export const state = () => ({
  connected: false,
  hasUnviewedMessage: false
})

export const getters = {
  hasUnviewedMessage(state) {
    return state.hasUnviewedMessage
  }
}

export const actions = {
  SET_CONNECTED({ commit }, isConnected) {
    commit('SET_CONNECTED', isConnected)
  },
  UNVIEWED_MESSAGE({ commit }, hasUnviewedMessage) {
    commit('UNVIEWED_MESSAGE', hasUnviewedMessage)
  }
}
export const mutations = {
  SET_CONNECTED(state, isConnected) {
    state.connected = isConnected
  },
  UNVIEWED_MESSAGE(state, hasUnviewedMessage) {
    state.hasUnviewedMessage = hasUnviewedMessage
  }
}