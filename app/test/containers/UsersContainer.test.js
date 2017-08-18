import {UsersContainer} from 'containers/UsersContainer'
import UsersComponent from 'components/UsersComponent'
import {Link} from 'react-router'
import React from 'react'
import {shallow} from 'enzyme'
import Immutable from 'immutable'

describe('Container::UsersContainer', function() {
  let props
  beforeEach(function() {
    props = {
      loadUsers: sinon.stub(),
      users: Immutable.fromJS([
        {
          'id': 1,
          'name': 'name 1'
        }
      ])
    }
  })

  it('should render all the loaded users when mounted', function() {
    let doc = shallow(<UsersContainer {...props}/>)
    let usersComp = doc.find(UsersComponent)

    expect(usersComp.props().users).to.equal(props.users)
  })

})
