const SET_USER = (state, obj) => {
  state.user = obj
}

// TODOS USUÁRIOS
const SET_USERS = (state, obj) => {
  state.users = obj
}
const REMOVE_USER = (state, index) => {
  state.users.splice(index, 1)
}

const SET_FILTER_USERS = (state, obj) => {
  state.filterUsers = obj
}

// USUÁRIOS REMOVIDOS
const SET_REMOVED_USERS = (state, obj) => {
  state.removedUsers.push(obj)
}
const REMOVE_REMOVED_USER = (state, index) => {
  state.removedUsers.splice(index, 1)
}

// USUÁRIOS ATENDIDOS
const SET_DONE_USERS = (state, obj) => {
  state.doneUsers.push(obj)
}
const REMOVE_DONE_USER = (state, index) => {
  state.doneUsers.splice(index, 1)
}

const SET_IS_INIT = (state, isInit) => {
  state.isInit = isInit
}
export default{
  SET_USER,

  SET_USERS,
  REMOVE_USER,

  SET_FILTER_USERS,

  SET_REMOVED_USERS,
  REMOVE_REMOVED_USER,

  SET_DONE_USERS,
  REMOVE_DONE_USER,

  SET_IS_INIT
}
