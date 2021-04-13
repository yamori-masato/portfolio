import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import {
  Top,
  Works,
} from 'pages'
import Layout from 'components/Layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/works" component={Works} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
