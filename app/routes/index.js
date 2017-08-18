import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import configureStore from 'store/configureStore'

import UsersContainer from 'containers/UsersContainer'

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/">
        {/* <Route path="users/:id/tweets" component={UserTweetsContainer} /> */}
        <IndexRoute component={UsersContainer} />
      </Route>
    </Router>
  )
}
