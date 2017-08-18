import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadUsers, selectUser} from 'actions/UsersActions'
import {Link} from 'react-router'
import UsersComponent from 'components/UsersComponent'
import TweetsComponent from 'components/TweetsComponent'
import Helmet from 'react-helmet'

class UsersContainer extends Component {

  static fetchData({store, params}) {
    return store.dispatch(loadUsers())
  }

  componentDidMount() {
    const {store} = this.context
    const id = this.props.userId
    return store.dispatch(loadUsers())
      .then(() => store.dispatch(selectUser(id)))
  }

  render() {
    const onChange = (id) => {
      const {store} = this.context
      return store.dispatch(selectUser(id))
    }

    return (
      <div>
        <Helmet
          title="Users"
        />
        <UsersComponent users={this.props.users} onChange={onChange}/>
        <TweetsComponent tweets={this.props.tweets}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const stateCopy = JSON.parse(JSON.stringify(state)) // ugly hack.
  return {userId: stateCopy.users.usersId, users: stateCopy.users.users, tweets: stateCopy.tweets}
}

UsersContainer.contextTypes = {
  store: React.PropTypes.object
}

export {UsersContainer}
export default connect(mapStateToProps, {loadUsers, selectUser})(UsersContainer)
