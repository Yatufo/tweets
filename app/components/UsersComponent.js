import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import { List } from 'immutable'

class UsersComponent extends Component {

  render() {
    console.log("UsersComponent", JSON.stringify(this.props))
    return (
      <ul>
        {
          this.props.users.map((user)=> {
            return (
              <li key={user.get("id")}>
                <Link to={`/users/${user.get("id")}`}> { user.get("name")}</Link>
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
