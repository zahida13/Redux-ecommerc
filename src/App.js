import React, { Suspense, lazy } from "react";
import "./App.css";
import Loader from "./Loader";
import store from "./Shopping Store/state/store";
import Navbar from "./Shopping Store/UI/Navbar";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Cart = lazy(() => import("./Shopping Store/UI/Cart"));
const UI = lazy(() => import("./Shopping Store/index"));
const Purchase = lazy(() => import("./Shopping Store/UI/Purchase"));
const About = lazy(() => import("./Shopping Store/UI/About"));
const Contact = lazy(() => import("./Shopping Store/UI/Contact"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <UI />} />
            <Route exact path="/cart" render={() => <Cart />} />
            <Route exact path="/purchase" render={() => <Purchase />} />
            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/contact" render={() => <Contact />} />
          </Switch>
        </Provider>
      </Suspense>
    </Router>
  );
};

export default App;
