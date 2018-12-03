const GET_USER = state => state.user
const GET_USERS = state => state.users
const GET_FILTERED_USERS = state => state.filterUsers
const GET_REMOVED_USERS = state => state.removedUsers
const GET_DONE_USERS = state => state.doneUsers
const GET_IS_INIT = state => state.isInit
const GET_TERM_SEARCH = state => state.termSearch

export default {
  GET_USER,
  GET_USERS,
  GET_FILTERED_USERS,
  GET_REMOVED_USERS,
  GET_DONE_USERS,
  GET_IS_INIT,
  GET_TERM_SEARCH
}
