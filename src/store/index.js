import Vue from 'vue'
import Vuex from 'vuex'
import videoStore from './modules/videoStore';
import sectionStore from './modules/sectionStore';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    videoStore,
    sectionStore
  },
  getters: {
  },
})
