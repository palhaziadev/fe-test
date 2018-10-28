export const state = () => ({
  carouselWidth: 640,
  carouselHeight: 480,
  images: [0],
  active: 0,
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
  SET_ACTIVE({ commit }, active) {
    commit('SET_ACTIVE', active);
  },
  SET_IMAGES({ commit }, images) {
    commit('SET_IMAGES', images);
  },
  SET_CAROUSEL_WIDTH({ commit }, carouselWidth) {
    commit('SET_CAROUSEL_WIDTH', carouselWidth);
    commit('EMPTY_IMAGES');
  },
  SET_CAROUSEL_HEIGHT({ commit }, carouselHeight) {
    commit('SET_CAROUSEL_HEIGHT', carouselHeight);
    commit('EMPTY_IMAGES');
  }
}
export const mutations = {
  SET_CAROUSEL_WIDTH(state, carouselWidth) {
    state.carouselWidth = carouselWidth;
  },
  SET_CAROUSEL_HEIGHT(state, carouselHeight) {
    state.carouselHeight = carouselHeight;
  },
  SET_IMAGES(state, images) {
    state.images = images;
  },
  EMPTY_IMAGES(state) {
    state.images = [];
    state.active = 0;
  },
  RESET_IMAGES(state) {
    state.images = [0];
    state.active = 0;
  },
  SET_ACTIVE(state, active) {
    state.active = active;
  }
}