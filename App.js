import App from "./app/index";

import React, { Component } from "react";

import { Provider } from "react-redux";
import todoApp from "./app/reducers";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./app/config/sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger);
// }

const store = createStore(todoApp, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

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
