import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import ItemDetail from "./components/itemDetail";
import { Provider } from "react-redux";

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

export default Root;
