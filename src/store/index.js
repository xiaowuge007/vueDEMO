/**
 * Created by pactera on 2018/1/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import role from './modules/role'
import permission from './modules/permission'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    role,
    permission
  },
  mutations: {
    CLEAR_USERINFO: (state) => {
      state.user.name = ''
      state.user.token = null
      state.role.role = []
      state.permission.permission = []
    }
  },
  actions: {
    logOut: ({commit}) => {
      return new Promise((resolve) => {
        commit('CLEAR_USERINFO')
        resolve()
      })
    }
  },
  getters
})

export default store
