const SET_USER = (state, obj) => {
  state.user = obj
}

const SET_USERS = (state, obj) => {
  state.users = obj
}
const REMOVE_USER = (state, index) => {
  state.users.splice(index, 1)
}

const SET_FILTER_USERS = (state, obj) => {
  state.filterUsers = obj
}

const SET_REMOVED_USERS = (state, obj) => {
  state.removedUsers.push(obj)
}

const SET_DONE_USERS = (state, obj) => {
  state.doneUsers.push(obj)
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
  SET_DONE_USERS,
  SET_IS_INIT
}
