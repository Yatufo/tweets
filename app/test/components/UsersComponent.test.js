import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router'
import UsersComponent from 'components/UsersComponent'
import Immutable from 'immutable'

describe('Component::UsersComponent', function(){
  let props
  beforeEach(function(){
    props = {
      questions: Immutable.fromJS([
        { id: 1, name: 'name1' },
        { id: 2, name: 'name2' }
      ])
    }
  })
  function renderDoc () {
    return shallow(<UsersComponent {...props} />)
  }

  it('renders questions', function(){
    let doc = renderDoc()
    let questionComps = doc.find(Link)

    expect(questionComps.length).to.equal(props.questions.size + 1)
  })
})
