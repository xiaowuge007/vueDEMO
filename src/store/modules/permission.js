/**
 * Created by pactera on 2018/2/23.
 */
import axios from '../../api'

const permission = {
  state: {
    permission: []
  },
  mutations: {
    SET_PERMISSION: (state, permission) => {
      state.permission = permission
    }
  },
  actions: {
    getPermission: ({commit}) => {
      return new Promise((resolve) => {
        axios.get('json/permission.json', null, function (res) {
          commit('SET_PERMISSION', res.permissions)
          resolve()
        })
      })
    }
  }
}

export default permission
