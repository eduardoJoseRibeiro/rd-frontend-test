const SET_USER = (state, obj) => {
  state.user = obj
}
const SET_USERS = (state, obj) => {
  state.users = obj
}
const SET_FILTER_USERS = (state, obj) => {
  state.filterUsers = obj
}
export default{
  SET_USER,
  SET_USERS,
  SET_FILTER_USERS
}
