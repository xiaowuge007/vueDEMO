/**
 * Created by pactera on 2018/2/23.
 */
import axios from '../../api'

const role = {
  state: {
    role: []
  },
  mutations: {
    SET_role: (state, role) => {
      state.role = role
    }
  },
  actions: {
    getRoles: ({commit}) => {
      return new Promise((resolve) => {
        axios.get('json/role.json', null, function (res) {
          commit('SET_role', res.roles)
          resolve()
        })
      })
    }
  }
}

export default role
