import store from '../store';

const state = {
  section: {},
  sectionContent: {},
}

// getters
const getters = {
  section: state => {
    return state.section
  },
}

// actions
const actions = {
  getVideo({ commit, state }, section) {
    commit('setSection', section);
  }  
}

// mutations
const mutations = {
  setSection(state, section) {
    state.section = section;
    store.commit("sectionStore/setSectionContent", section.contents[0]);
  },
  setSectionContent(state, sectionContent) {
    state.sectionContent = sectionContent;
    const splited = sectionContent.value.split('/');      
    let videoId = splited[splited.length-1];    
    store.commit("videoStore/setVideo", videoId);
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
