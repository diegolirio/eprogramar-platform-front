const state = {
  video: {},
  videos: [],
}

// getters
const getters = {
  video: state => {
    return state.video
  },
}

// actions
const actions = {
  getVideo({ commit, state }, video) {
    commit('setVideo', video);
  }  
}

// mutations
const mutations = {
  setVideo(state, video) {
    state.video = 'https://player.vimeo.com/video/' + video;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
