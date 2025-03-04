import React, { lazy, Suspense } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

const generatedClassName = createGenerateClassName({
  productionPrefix: "co",
});

/* import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp"; */
import Header from "./components/Header";
import Loading from "./components/Loading";
import { useState } from "react";

const marketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

export default () => {
  console.log("cc");
  const [isSignedin, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
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
              <Route path="/" component={marketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
