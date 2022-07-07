import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./state/store";
import Loader from "../Loader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "./UI/Slider";
const Cards = lazy(() => import("./UI/Cards"));

const Index = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <Slider />
        <Cards />
      </Suspense>
    </Provider>
  );
};

export default Index;
