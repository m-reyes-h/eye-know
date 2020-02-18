import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Trivia from "./routes/Trivia";
import Answer from "./routes/Answer";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/trivia">
            <Trivia />
          </Route>
          <Route path="/answer">
            <Answer />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
