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
import ScrollToTop from './ScrollToTop'

const App = () => {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/works" component={Works} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
