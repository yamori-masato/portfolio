import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import {
  Top,
  Works,
  WorkDetail,
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
          <Route exact path="/works/:id" component={WorkDetail} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
