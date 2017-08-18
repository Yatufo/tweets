import * as ActionType from 'actions/UsersActions'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS([])
function UsersReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_USERS:
      return Immutable.fromJS(action.response)
      break
    default:
      return state
  }
}

export default UsersReducer
