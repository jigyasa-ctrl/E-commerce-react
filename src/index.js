import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Page from "./Components/Page";
import data from "./data";
import App from "./App";
import ProductPage from "./Components/ProductPage";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./reducer";

const store = createStore(Reducer);

const routing = (
  <Router>
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Provider store={store}>
              <App />
            </Provider>
          )}
        />
        <Route
          path="/Sweaters"
          render={() => <Page value={data.data[0].sweaters} footer={data} />}
        />
        <Route
          path="/Dresses"
          render={() => <Page value={data.data[0].dresses} footer={data} />}
        />
        <Route
          path="/skirts"
          render={() => <Page value={data.data[0].skirts} footer={data} />}
        />
        <Route
          path="/Shorts"
          render={() => <Page value={data.data[0].shorts} footer={data} />}
        />
        <Route
          path="/Pants"
          render={() => <Page value={data.data[0].pants} footer={data} />}
        />
        <Route
          path="/product"
          render={() => <ProductPage value={data} footer={data} />}
        />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
