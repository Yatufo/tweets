import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import configureStore from 'store/configureStore'

import App from 'containers/App'
import UsersContainer from 'containers/UsersContainer'

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="users" component={UsersContainer} />
        <IndexRoute component={UsersContainer} />
      </Route>
    </Router>
  )
}
