import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plugins: {},
    tabs: [
      {
        "title": "marketing",
        "icon": "el-icon-s-grid",
        "active": ["Plugin 1", "Plugin 2", "Plugin 4"],
        "disabled": ["Plugin 3"],
        "inactive": ["Plugin 5", "Plugin 6"]
      },
      {
        "title": "finance",
        "icon": "el-icon-document",
        "active": ["plugin7", "plugin8"],
        "disabled": ["Plugin 9"],
        "inactive": ["Plugin 10"]
      },
      {
        "title": "personnel",
        "icon": "el-icon-setting",
        "active": ["Plugin 1"],
        "disabled": ["Plugin 2"],
        "inactive": ["Plugin 13"]
      }
    ],
  },
  mutations:  {
    setPlugins(state, payload) {
      state.plugins = payload;
    },
    setTabs(state, payload) {
      state.tabs = payload;
    },
  },
  actions: {
    setState ({ commit }, { payload }) {
      try {
        commit("setPlugins", payload)
      } catch (e) {
        console.log(e.message)
      }
    },
    setStateTabs ({ commit }, { payload }) {
      try {
        commit("setTabs", payload)
      } catch (e) {
        console.log(e.message)
      }
    },
  },
  modules: {
  }
})
