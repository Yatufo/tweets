import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {loadUsers} from 'actions/UsersActions'
import { UsersComponent } from 'components/UsersComponent'
import PropTypes from 'prop-types'


class UsersContainer extends Component {

  static fetchData({store}) {
    return store.dispatch(loadUsers())
  }

  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
     return (
      <div>
        <h1>
          Users
        </h1>
        <UsersComponent users={this.props.users}/>
      </div>
    );
  }
}

function mapStateToProps(estate) {
  return {users: estate.users}
}

export { UsersContainer }
export default connect(mapStateToProps, {loadUsers})(UsersContainer)
