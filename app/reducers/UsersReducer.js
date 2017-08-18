import * as ActionType from 'actions/UsersActions'
import Immutable from 'immutable'

const defaultState = Immutable.fromJS([])
function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionType.LOADED_USERS:
      Immutable.fromJS(action.response)
    default:
      return state
  }
}

export default usersReducer
