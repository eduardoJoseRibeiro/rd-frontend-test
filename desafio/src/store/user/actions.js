const setUser = ({ commit }, obj) => {
  commit('SET_USER', { obj })
}
const setUsers = ({ commit }, obj) => {
  commit('SET_USERS', { obj })
}
export default {
  setUser,
  setUsers
}
