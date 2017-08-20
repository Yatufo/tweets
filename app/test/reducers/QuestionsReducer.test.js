import usersReducer from 'reducers/UsersReducer'
import * as ActionType from 'actions/UsersActions'

describe('Reducer::Users', function(){
  it('returns an empty array as default state', function(){
    let action = { type: 'unknown' }
    let newState = usersReducer(undefined, { type: 'unknown' })
    expect(newState.toJS()).to.deep.equal([])
  })

  describe('on LOADED_USERS', function(){
    it('returns the `response` in given action', function(){
      let action = {
        type: ActionType.LOADED_USERS,
        response: { responseKey: 'responseVal' }
      }
      let newState = usersReducer(undefined, action)
      expect(newState.toJS()).to.deep.equal(action.response)
    })
  })
})
