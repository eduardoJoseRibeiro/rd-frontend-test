import axios from 'axios'

const API = 'https://randomuser.me/api/'

const setUser = ({ commit }, obj) => {
  commit('SET_USER', { obj })
}
const setUsers = ({ commit }, quantity) => {
  const URL = `${API}?results=${quantity}`

  axios
    .get(URL)
    .then(users => {
      commit('SET_USERS', users.data.results)
    })
    .catch(error => console.error(error))
}
export default {
  setUser,
  setUsers
}
