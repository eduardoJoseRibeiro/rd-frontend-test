const SET_USER = (state, obj) => {
  state.user = obj
}
const SET_USERS = (state, obj) => {
  state.users = obj
}
const SET_FILTER_USERS = (state, obj) => {
  state.filterUsers = obj
}
const SET_IS_INIT = (state, isInit) => {
  state.isInit = isInit
}
export default{
  SET_USER,
  SET_USERS,
  SET_FILTER_USERS,
  SET_IS_INIT
}
