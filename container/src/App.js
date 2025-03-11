import React, { lazy, Suspense, useEffect, useState } from "react";

import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

const generatedClassName = createGenerateClassName({
  productionPrefix: "co",
});

import Header from "./components/Header";
import Loading from "./components/Loading";

const marketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  console.log("container renderizado", isSignedIn);

  /*  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]); */

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generatedClassName}>
        <div>
          <Header
            isSignedIn={isSignedin}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {isSignedIn ? <DashboardLazy /> : <Redirect to="/" />}
                <DashboardLazy component={DashboardLazy} />
              </Route>
              <Route path="/" component={marketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
