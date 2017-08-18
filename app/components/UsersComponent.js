import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { List } from 'immutable'

class UsersComponent extends Component {
  render() {
    return (
      <ul>
        {
          this.props.users.map((user)=> {
            let id = user.id
            return (
              <li key={user.id}>
                <Link to={`/users/${user.id}/tweets`}>{user.name}</Link>
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
