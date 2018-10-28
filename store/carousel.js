export const state = () => ({
  carouselWidth: 640,
  carouselHeight: 480,
})

export const getters = {
  getCarouselSize(state) {
    return {
      carouselWidth: state.carouselWidth,
      carouselHeight: state.carouselHeight,
    }
  }
}

export const actions = {
  SET_CAROUSLE_WIDTH({ commit }, carouselWidth) {
    commit('SET_CAROUSLE_WIDTH', carouselWidth);
  },
  SET_CAROUSLE_HEIGHT({ commit }, carouselHeight) {
    commit('SET_CAROUSLE_HEIGHT', carouselHeight);
  }
}
export const mutations = {
  SET_CAROUSLE_WIDTH(state, carouselWidth) {
    state.carouselWidth = carouselWidth;
  },
  SET_CAROUSLE_HEIGHT(state, carouselHeight) {
    state.carouselHeight = carouselHeight;
  }
}