import React, {Component} from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import {List} from 'immutable'

class UsersComponent extends Component {

  render() {
    return (
      <ul>
        {this.props.users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          )
        })
}
      </ul>
    )
  }
}

UsersComponent.propTypes = {
  users: PropTypes.instanceOf(List).isRequired
}

export default UsersComponent
