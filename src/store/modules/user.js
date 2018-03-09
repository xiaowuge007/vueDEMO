/**
 * Created by pactera on 2018/2/23.
 */
import Cookies from 'js-cookie'

const user = {
  state: {
    count: 0,
    name: '',
    token: Cookies.get('token')
  },
  mutations: {
    SET_COUNT: (state, count) => {
      state.count = count
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    }
  },
  actions: {
    changeCount: (context) => {
      context.commit('SET_COUNT', 5)
    },
    getToken: (context, token) => {
      context.commit('SET_TOKEN', token)
    },
    setName: (context, name) => {
      context.commit('SET_NAME', name)
    }
  }
}

export default user
