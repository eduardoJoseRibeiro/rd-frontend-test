import axios from 'axios'
import constant from './constants'

const API = 'https://randomuser.me/api/'

const setUser = ({ commit }, obj) => {
  commit(constant.SET_USER, obj)
}
const setUsers = ({ commit }, quantity) => {
  const URL = `${API}?results=${quantity}`
  commit(constant.SET_IS_INIT, true)

  axios
    .get(URL)
    .then(users => {
      commit(constant.SET_USERS, users.data.results)
      commit(constant.SET_CONCAT_FILTER_USERS, users.data.results)
      commit(constant.SET_IS_INIT, false)
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

  commit(constant.SET_FILTER_USERS, usersFilter)
}
const setRawFilter = ({ commit }, users) => {
  commit(constant.SET_FILTER_USERS, users)
}
const setAllUsers = ({ commit }, params) => {
  if (params.route !== constant.TODOS) commit(constant.SET_SINGLE_USER, params.user)
  if (params.route === constant.ATENDIDOS) commit(constant.REMOVE_DONE_USER, params.index)
  if (params.route === constant.LIXEIRA) commit(constant.REMOVE_REMOVED_USER, params.index)
}
const setRemovedUsers = ({ commit }, params) => {
  if (params.route !== constant.LIXEIRA) commit(constant.SET_REMOVED_USERS, params.user)
  if (params.route === constant.ATENDIDOS) commit(constant.REMOVE_DONE_USER, params.index)
  if (params.route === constant.TODOS) commit(constant.REMOVE_USER, params.index)
}
const setDoneUsers = ({ commit }, params) => {
  if (params.route !== constant.ATENDIDOS) commit(constant.SET_DONE_USERS, params.user)
  if (params.route === constant.LIXEIRA) commit(constant.REMOVE_REMOVED_USER, params.index)
  if (params.route === constant.TODOS) commit(constant.REMOVE_USER, params.index)
}
const setTermSearch = ({ commit }, term) => {
  commit(constant.SET_TERM_SEARCH, term)
}
export default {
  setUser,
  setUsers,
  setFilterUsers,
  setRawFilter,
  setAllUsers,
  setRemovedUsers,
  setDoneUsers,
  setTermSearch
}
