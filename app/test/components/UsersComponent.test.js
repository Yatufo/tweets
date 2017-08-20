import React from 'react'
import {shallow} from 'enzyme'
import {Link} from 'react-router'
import UsersComponent from 'components/UsersComponent'
import Immutable from 'immutable'

describe('Component::UsersComponent', function() {
  let props
  beforeEach(function() {
    props = {
      users: Immutable.fromJS(_.range(1, 10).map((id) => {
        return {'id': id, 'name': `name ${id}`}
      }))
    }
  })
  function renderDoc() {
    return shallow(<UsersComponent {...props}/>)
  }

  it('should render all users links', function() {
    let doc = renderDoc()
    let usersLinks = doc.find(Link)

    expect(usersLinks.length).to.equal(props.users.size)
  })
})
