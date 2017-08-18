import { combineReducers } from 'redux'
import UsersReducer from 'reducers/UsersReducer'
import TweetsReducer from 'reducers/TweetsReducer'

const rootReducer = combineReducers({
  users : UsersReducer,
  tweets : TweetsReducer
})

export default rootReducer
