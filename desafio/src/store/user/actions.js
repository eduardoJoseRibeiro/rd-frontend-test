import axios from 'axios'

const API = 'https://randomuser.me/api/'

const setUser = ({ commit }, obj) => {
  commit('SET_USER', { obj })
}
const setUsers = ({ commit }, quantity) => {
  const URL = `${API}?results=${quantity}`

  return new Promise((resolve, reject) => {
    axios
      .get(URL)
      .then(users => {
        commit('SET_USERS', users.data.results)
        resolve()
      })
      .catch(error => reject(error))
  })
}
export default {
  setUser,
  setUsers
}
