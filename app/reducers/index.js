import { combineReducers } from 'redux'
import users from 'reducers/UsersReducer'


const rootReducer = combineReducers({
  users
})

export default rootReducer
