import * as ActionType from 'actions/UsersActions'

const defaultState = []
function UsersTweetsReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_USER_TWEETS:
      return action.response
      break
    default:
      return state
  }
}

export default UsersTweetsReducer
