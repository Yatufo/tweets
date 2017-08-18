import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadQuestions } from 'actions/UsersActions'
import { Link } from 'react-router'
import _ from 'lodash'
import UsersComponent from 'components/UsersComponent'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class UsersContainer extends Component {
  static fetchData({ store }) {
    return store.dispatch(loadQuestions())
  }

  componentDidMount() {
    this.props.loadQuestions()
  }
  render() {
    return (
      <div>
        <Helmet
          title="Users"
        />
        <h2>List of available users:</h2>
        <UsersComponent users={this.props.users} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { users: state.users }
}

export { UsersContainer }
export default connect(mapStateToProps, { loadQuestions })(UsersContainer)
