import axios from 'axios'

const API = 'https://randomuser.me/api/'

const setUser = ({ commit }, obj) => {
  commit('SET_USER', obj)
}
const setUsers = ({ commit }, quantity) => {
  const URL = `${API}?results=${quantity}`
  commit('SET_IS_INIT', true)

  axios
    .get(URL)
    .then(users => {
      commit('SET_USERS', users.data.results)
      commit('SET_FILTER_USERS', users.data.results)
      commit('SET_IS_INIT', false)
    })
    .catch(error => console.warn(error))
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
const setRawFilter = ({ commit }, users) => {
  commit('SET_FILTER_USERS', users)
}
const setAllUsers = ({ commit }, params) => {
  if (params.route !== 'todos') commit('SET_SINGLE_USER', params.user)
  if (params.route === 'atendidos') commit('REMOVE_DONE_USER', params.index)
  if (params.route === 'lixeira') commit('REMOVE_REMOVED_USER', params.index)
}
const setRemovedUsers = ({ commit }, params) => {
  if (params.route !== 'lixeira') commit('SET_REMOVED_USERS', params.user)
  if (params.route === 'atendidos') commit('REMOVE_DONE_USER', params.index)
  if (params.route === 'todos') commit('REMOVE_USER', params.index)
}
const setDoneUsers = ({ commit }, params) => {
  if (params.route !== 'atendidos') commit('SET_DONE_USERS', params.user)
  if (params.route === 'lixeira') commit('REMOVE_REMOVED_USER', params.index)
  if (params.route === 'todos') commit('REMOVE_USER', params.index)
}
export default {
  setUser,
  setUsers,
  setFilterUsers,
  setRawFilter,
  setAllUsers,
  setRemovedUsers,
  setDoneUsers
}
