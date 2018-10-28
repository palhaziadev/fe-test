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
  SET_CAROUSEL_WIDTH({ commit }, carouselWidth) {
    commit('SET_CAROUSEL_WIDTH', carouselWidth);
  },
  SET_CAROUSEL_HEIGHT({ commit }, carouselHeight) {
    commit('SET_CAROUSEL_HEIGHT', carouselHeight);
  }
}
export const mutations = {
  SET_CAROUSEL_WIDTH(state, carouselWidth) {
    state.carouselWidth = carouselWidth;
  },
  SET_CAROUSEL_HEIGHT(state, carouselHeight) {
    state.carouselHeight = carouselHeight;
  }
}