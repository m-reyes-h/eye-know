import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import middlewares from "./middlewares/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";

const store = createStore(reducers, composeWithDevTools(middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
