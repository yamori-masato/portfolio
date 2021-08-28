import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Top, Works, WorkDetail, Contact } from "pages";
import Layout from "components/Layout";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/works/:id" component={WorkDetail} />
          <Route exact path="/contact" component={Contact} />
          <Redirect path="*" to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
