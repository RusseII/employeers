import App from "./app/index";

import React, { Component } from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./app/reducers";

let store = createStore(todoApp);

// import { Navigate } from "../components/config/routes";

class MyApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default MyApp;
