import React, {Component} from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

class UsersComponent extends Component {
  render() {
    return (
      <div>
        <h2>List of available users:</h2>
        <ul className="tweets">
          {this.props.users.map((user) => {
            return (
              <li key={user.id} onClick={() => this.props.onChange(user.id)}>
                <a href="#">{user.name}</a>
              </li>
            )
          })
          }
        </ul>
      </div>
    )
  }
}

UsersComponent.propTypes = {
  users: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.instanceOf(Function).isRequired
}

export default UsersComponent
