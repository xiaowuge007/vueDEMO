/**
 * Created by pactera on 2018/2/23.
 */
const getters = {
  count: state => state.user.count,
  name: state => state.user.name,
  token: state => state.user.token,
  role: state => state.role.role,
  permission: state => state.permission.permission
}
export default getters
