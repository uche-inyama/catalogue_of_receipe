import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import App from "./App";
import ItemDetail from "./components/itemDetail/itemDetail";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/:id" component={ItemDetail} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default Root;
