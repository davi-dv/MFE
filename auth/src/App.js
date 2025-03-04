import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

/* import Landing from "../components/Landing";
import Pricing from "../components/Pricing"; */
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generatedClassName = createGenerateClassName({
  productionPrefix: "au",
});
export default ({ history, onSignIn }) => {
  console.log("teste sauth");
  return (
    <div>
      <StylesProvider generateClassName={generatedClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
