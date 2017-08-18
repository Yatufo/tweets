import { CALL_API, CHAIN_API } from 'middleware/api'

import * as actionCreator from 'actions/UsersActions'
import * as ActionType from 'actions/UsersActions'

describe('Action::UserTweetsContainer', function(){
  describe('#loadUsers()', function(){
    it('returns action `CALL_API` info', function(){
      let action = actionCreator.loadUsers()
      expect(action[CALL_API]).to.deep.equal({
        method: 'get',
        path: '/api/users',
        successType: ActionType.LOADED_USERS
      })
    })
  })
})
