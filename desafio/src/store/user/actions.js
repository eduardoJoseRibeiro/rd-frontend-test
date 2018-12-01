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
        commit('SET_FILTER_USERS', users.data.results)
        resolve()
      })
      .catch(error => reject(error))
  })
}
const setFilterUsers = ({ commit }, params) => {
  let exp = new RegExp(params.term.trim(), 'i')

  const usersFilter = params.users.filter(user => {
    return exp.test(user.email) ||
      exp.test(user.name.first) ||
      exp.test(user.name.last)
  })

  commit('SET_FILTER_USERS', usersFilter)
}
export default {
  setUser,
  setUsers,
  setFilterUsers
}
