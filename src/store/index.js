/**
 * Created by pactera on 2018/1/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count: (state) => {
      return state.count
    }
  },
  mutations: {
    SET_COUNT: (state, count) => {
      state.count = count
    }
  },
  actions: {
    changeCount: (context) => {
      context.commit('SET_COUNT', 5)
    }
  }
})

export default store
