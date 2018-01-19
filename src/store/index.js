/**
 * Created by pactera on 2018/1/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    token: window.sessionStorage.getItem('token')
  },
  getters: {
    count: (state) => {
      return state.count
    },
    token: (state) => {
      return state.token
    }
  },
  mutations: {
    SET_COUNT: (state, count) => {
      state.count = count
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    changeCount: (context) => {
      context.commit('SET_COUNT', 5)
    },
    getToken: (context, token) => {
      context.commit('SET_TOKEN', token)
    }
  }
})

export default store
