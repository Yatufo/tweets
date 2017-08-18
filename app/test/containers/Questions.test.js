// import { QuestionContainer } from 'containers/UsersComponent'
// import UsersComponent from 'components/UsersComponent'
// import { Link } from 'react-router'
// import React from 'react'
// import { shallow } from 'enzyme'
// import Immutable from 'immutable'
//
// describe('Container::UsersComponent', function(){
//   let props
//   beforeEach(function(){
//     props = {
//       loadUsers: sinon.stub(),
//       questions: Immutable.fromJS([
//         { id: 1, content: 'question content 1' },
//         { id: 2, content: 'question content 1' }
//       ])
//     }
//   })
//
//   it('renders UsersComponent with questions in props', function(){
//     let doc = shallow(<QuestionContainer {...props}/>)
//     let questionsComp = doc.find(UsersComponent)
//
//     expect(questionsComp.props().questions).to.equal(props.questions)
//   })
//
//   it('renders a link back to `/`', function(){
//     let doc = shallow(<QuestionContainer {...props}/>)
//     let link = doc.find('Link')
//
//     expect(link).to.exist
//     expect(link.props().to).to.equal('/')
//   })
// })
